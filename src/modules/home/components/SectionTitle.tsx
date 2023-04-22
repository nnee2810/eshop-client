import clsx from "clsx"
import { HTMLAttributes, PropsWithChildren } from "react"

interface SectionTitleProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLDivElement> {}

export default function SectionTitle({
  children,
  className,
  ...props
}: SectionTitleProps) {
  return (
    <div {...props} className={clsx(className, "mb-12 text-3xl font-medium")}>
      {children}
    </div>
  )
}
