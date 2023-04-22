import Button from "@/components/core/Button"
import clsx from "clsx"
import { useEffect, useState } from "react"
import { AiOutlineArrowUp } from "react-icons/ai"

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" })

  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 500) setVisible(true)
      else setVisible(false)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [setVisible])

  return (
    <div
      className={clsx(
        "fixed bottom-4 right-4 transition-all duration-500 z-50",
        {
          "invisible opacity-0": !visible,
        }
      )}
    >
      <Button className="btn-square text-2xl" onClick={handleClick}>
        <AiOutlineArrowUp />
      </Button>
    </div>
  )
}
