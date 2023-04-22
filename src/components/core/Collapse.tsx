import { PropsWithChildren } from "react"
import { HiOutlineChevronDown } from "react-icons/hi"

interface CollapseProps extends PropsWithChildren {
  label: string
  arrow?: boolean
}

export default function Collapse({ label, arrow, children }: CollapseProps) {
  return (
    <div className="collapse">
      <input type="checkbox" className="min-h-0" />
      <div className="collapse-title px-0 py-3 min-h-0 flex justify-between text-gray-600 text-sm font-medium rounded-lg transition-all duration-300">
        <span>{label}</span>
        {arrow && <HiOutlineChevronDown />}
      </div>
      <div className="collapse-content">{children}</div>
    </div>
  )
}
