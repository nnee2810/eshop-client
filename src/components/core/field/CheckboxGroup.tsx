import { useCallback, useEffect, useState } from "react"
import { ControllerRenderProps } from "react-hook-form"
import { SelectOption } from "./Select"

export interface CheckboxGroupProps<T> extends Partial<ControllerRenderProps> {
  variant?: "checkbox-group"
  isInvalid?: boolean
  options: SelectOption<T>[]
}

export default function CheckboxGroup<T extends number | string>({
  variant,
  isInvalid,
  options,
  ...props
}: CheckboxGroupProps<T>) {
  const [selected, setSelected] = useState(
    (props.value as (number | string)[]) || []
  )

  const handleChange = useCallback(
    (value: number | string) => {
      setSelected((prev) => {
        const idx = prev.findIndex((item) => item === value)
        if (idx === -1) return [...prev, value]
        return [...prev.slice(0, idx), ...prev.slice(idx + 1)]
      })
    },
    [setSelected]
  )

  useEffect(() => {
    if (props.onChange) props.onChange(selected)
  }, [props.onChange, selected])

  return (
    <div className="space-y-2">
      {options.map((item) => (
        <label className="flex items-center gap-2" key={item.label}>
          <input
            type="checkbox"
            value={item.value}
            checked={selected.includes(item.value)}
            onChange={handleChange.bind(null, item.value)}
            className="checkbox"
          />
          <span className="text-sm">{item.label}</span>
        </label>
      ))}
    </div>
  )
}
