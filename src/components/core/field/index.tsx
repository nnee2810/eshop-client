import { getFieldError } from "@/helpers/getFieldError"
import { Controller, useFormContext } from "react-hook-form"
import Checkbox, { CheckboxProps } from "./Checkbox"
import CheckboxGroup, { CheckboxGroupProps } from "./CheckboxGroup"
import FieldLabel from "./FieldLabel"
import Select, { SelectProps } from "./Select"
import TextInput, { TextInputProps } from "./TextInput"

interface FieldBaseProps {
  name: string
  label?: string
}

type FieldProps = (
  | TextInputProps
  | SelectProps
  | CheckboxProps
  | CheckboxGroupProps
) &
  FieldBaseProps

export default function Field(props: FieldProps) {
  const { variant, name, label } = props
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <div>
      {variant !== "checkbox" && <FieldLabel>{label}</FieldLabel>}
      <Controller
        control={control}
        name={name}
        render={({ field: { ref, ...restField } }) => (
          <>
            {variant === "text" && (
              <TextInput
                {...restField}
                {...props}
                isInvalid={!!getFieldError(errors, props.name)}
              />
            )}
            {variant === "select" && (
              <Select
                {...restField}
                {...props}
                isInvalid={!!getFieldError(errors, props.name)}
              />
            )}
            {variant === "checkbox" && (
              <Checkbox
                {...restField}
                {...props}
                isInvalid={!!getFieldError(errors, props.name)}
              />
            )}
            {variant === "checkbox-group" && (
              <CheckboxGroup
                {...restField}
                {...props}
                isInvalid={!!getFieldError(errors, props.name)}
              />
            )}
          </>
        )}
      />

      {!!getFieldError(errors, props.name) && (
        <div className="text-xs text-red-500">
          {getFieldError(errors, props.name)}
        </div>
      )}
    </div>
  )
}
