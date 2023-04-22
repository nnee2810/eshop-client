import { PropsWithChildren } from "react"

export default function FieldLabel({ children }: PropsWithChildren) {
  return children ? (
    <label className="text-gray-600 text-sm font-medium">{children}</label>
  ) : null
}
