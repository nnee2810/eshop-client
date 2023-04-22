import clsx from "clsx"
import { ControllerRenderProps } from "react-hook-form"

export interface SelectOption<T = unknown> {
  label: string
  value: T
}

export interface SelectProps<T> extends Partial<ControllerRenderProps> {
  variant?: "select"
  isInvalid?: boolean
  options: SelectOption<T>[]
}

export default function Select<T extends number | string>({
  variant,
  options,
  isInvalid,
  ...props
}: SelectProps<T>) {
  return (
    <select
      {...props}
      className={clsx("select select-bordered w-full", {
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
