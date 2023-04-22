import { ControllerRenderProps } from "react-hook-form"

export interface CheckboxProps extends Partial<ControllerRenderProps> {
  variant?: "checkbox"
  isInvalid?: boolean
  label?: string
}

export default function Checkbox({
  variant,
  isInvalid,
  label,
  ...props
}: CheckboxProps) {
  return (
    <label className="flex items-center gap-2">
      <input {...props} type="checkbox" className="checkbox" />
      <span className="text-sm">{label}</span>
    </label>
  )
}
