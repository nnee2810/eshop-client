import clsx from "clsx"
import { ControllerRenderProps } from "react-hook-form"

export interface TextInputProps extends Partial<ControllerRenderProps> {
  variant?: "text"
  isInvalid?: boolean
}

export default function TextInput({
  variant,
  isInvalid,
  ...props
}: TextInputProps) {
  return (
    <input
      {...props}
      className={clsx("input input-bordered w-full", {
        "input-error": isInvalid,
      })}
    />
  )
}
