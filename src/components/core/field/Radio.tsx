import { ControllerRenderProps } from "react-hook-form"

export interface RadioProps extends Partial<ControllerRenderProps> {
  variant?: "checkbox"
  isInvalid?: boolean
  title: string
}

export default function Radio({
  variant,
  isInvalid,
  title,
  ...props
}: RadioProps) {
  return (
    <label className="flex items-center gap-2">
      <input {...props} type="radio" className="radio" />
      <span>{title}</span>
    </label>
  )
}
