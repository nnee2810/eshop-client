import clsx from "clsx"
import { PropsWithChildren, ReactNode } from "react"

interface DropdownProps {
  label: ReactNode
  placement?:
    | "top"
    | "top-end"
    | "bottom"
    | "end"
    | "bottom-end"
    | "left"
    | "left-end"
    | "right"
    | "right-end"
}

export default function Dropdown({
  label,
  placement,
  children,
}: PropsWithChildren<DropdownProps>) {
  return (
    <div
      className={clsx("dropdown", {
        "dropdown-top": placement === "top" || placement === "top-end",
        "dropdown-bottom": placement === "bottom" || placement === "bottom-end",
        "dropdown-left": placement === "left" || placement === "left-end",
        "dropdown-right": placement === "right" || placement === "right-end",
        "dropdown-end":
          placement === "end" ||
          placement === "top-end" ||
          placement === "bottom-end" ||
          placement === "left-end" ||
          placement === "right-end",
      })}
    >
      <label tabIndex={0} className="cursor-pointer">
        {label}
      </label>
      <div
        tabIndex={0}
        className="mt-2 dropdown-content bg-base-100 border rounded-lg shadow-lg"
      >
        {children}
      </div>
    </div>
  )
}
