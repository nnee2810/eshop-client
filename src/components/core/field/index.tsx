import { getFieldError } from "@/helpers/getFieldError"
import { Controller, useFormContext } from "react-hook-form"
import Select, { SelectProps } from "./Select"
import TextInput, { TextInputProps } from "./TextInput"

interface FieldBaseProps {
  name: string
  label?: string
}

type FieldProps = (TextInputProps | SelectProps) & FieldBaseProps

export default function Field(props: FieldProps) {
  const { variant, name, label } = props
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <div>
      {label && (
        <label className="text-gray-600 text-sm font-medium">{label}</label>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field: { ref, ...restField } }) => (
          <>
            {variant === "text" && (
              <TextInput
                isInvalid={!!getFieldError(errors, props.name)}
                {...props}
                {...restField}
              />
            )}
            {variant === "select" && (
              <Select
                isInvalid={!!getFieldError(errors, props.name)}
                {...props}
                {...restField}
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
