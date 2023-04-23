import clsx from "clsx"
import { InputHTMLAttributes } from "react"

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "checkbox"
  isInvalid?: boolean
  label?: string
}

export default function Checkbox({
  variant,
  isInvalid,
  label,
  className,
  ...props
}: CheckboxProps) {
  return (
    <label className="flex items-center gap-2">
      <input
        {...props}
        type="checkbox"
        className={clsx(className, "checkbox")}
      />
      <span className="text-sm">{label}</span>
    </label>
  )
}
