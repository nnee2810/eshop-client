import clsx from "clsx"
import { AnchorHTMLAttributes, PropsWithChildren } from "react"

export default function Menu({ children }: PropsWithChildren) {
  return <ul className="w-48 p-2 menu">{children}</ul>
}

export function MenuItem({
  children,
  className,
  ...props
}: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) {
  return (
    <li>
      <a {...props} className={clsx(className, "text-base active:bg-black")}>
        <div className="flex items-center gap-2">{children}</div>
      </a>
    </li>
  )
}
