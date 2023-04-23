import clsx from "clsx"
import { SelectHTMLAttributes } from "react"

export interface SelectOption {
  label: string
  value: number | string
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  variant?: "select"
  isInvalid?: boolean
  options: SelectOption[]
}

export default function Select({
  variant,
  options,
  isInvalid,
  className,
  ...props
}: SelectProps) {
  return (
    <select
      {...props}
      className={clsx(className, "select select-bordered w-full", {
        "select-error": isInvalid,
      })}
    >
      <option value="">Chọn...</option>
      {options.map((item) => (
        <option value={item.value} key={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  )
}
