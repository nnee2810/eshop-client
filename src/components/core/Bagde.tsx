import clsx from "clsx"
import { HTMLAttributes, PropsWithChildren } from "react"
import { MdClose } from "react-icons/md"

interface BagdeProps
  extends HTMLAttributes<HTMLSpanElement>,
    PropsWithChildren {
  onDelete?: () => void
}

export default function Bagde({
  onDelete,
  className,
  children,
  ...props
}: BagdeProps) {
  return (
    <span {...props} className={clsx(className, "badge")}>
      {children}{" "}
      {!!onDelete && (
        <MdClose className="ml-1 text-sm cursor-pointer" onClick={onDelete} />
      )}
    </span>
  )
}
