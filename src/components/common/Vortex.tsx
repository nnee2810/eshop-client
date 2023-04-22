import clsx from "clsx"
import { PropsWithChildren } from "react"

export default function Vortex({ children }: PropsWithChildren) {
  return (
    <div className="relative group p-2 transition-all">
      {children}
      <div
        className={clsx(
          "absolute top-0 left-0 w-0 h-0.5 bg-black",
          "transition-all duration-300",
          "group-hover:w-full"
        )}
      ></div>
      <div
        className={clsx(
          "absolute top-0 right-0 w-0.5 h-0 bg-black",
          "transition-all duration-300",
          "group-hover:h-full"
        )}
      ></div>
      <div
        className={clsx(
          "absolute bottom-0 right-0 w-0 h-0.5 bg-black",
          "transition-all duration-300",
          "group-hover:w-full"
        )}
      ></div>
      <div
        className={clsx(
          "absolute bottom-0 left-0 w-0.5 h-0 bg-black",
          "transition-all duration-300",
          "group-hover:h-full"
        )}
      ></div>
    </div>
  )
}
