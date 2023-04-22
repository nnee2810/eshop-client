import { HTMLAttributes, PropsWithChildren } from "react"

interface ResponsiveBoxProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLDivElement> {}

export default function ResponsiveBox({
  children,
  ...props
}: ResponsiveBoxProps) {
  return (
    <div {...props}>
      <div className="max-w-screen-2xl mx-auto">{children}</div>
    </div>
  )
}
