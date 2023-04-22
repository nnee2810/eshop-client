import clsx from "clsx"
import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
}

export default function Button({
  loading,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(className, "btn gap-2", {
        loading,
        "btn-disabled": disabled,
      })}
    >
      {children}
    </button>
  )
}
