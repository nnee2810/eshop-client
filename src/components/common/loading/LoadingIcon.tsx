import clsx from "clsx"
import { CgSpinnerTwoAlt } from "react-icons/cg"

interface LoadingIconProps {
  size?: "small" | "medium" | "large"
}

export default function LoadingIcon({ size = "small" }: LoadingIconProps) {
  return (
    <CgSpinnerTwoAlt
      className={clsx("animate-spin", {
        "text-6xl": size === "large",
        "text-4xl": size === "medium",
        "text-xl": size === "small",
      })}
    />
  )
}
