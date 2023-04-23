import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import { ReactNode } from "react"
import { AiOutlineUser } from "react-icons/ai"
import { FiMapPin, FiShoppingBag } from "react-icons/fi"

interface SidebarItem {
  name: string
  path: string
  icon: ReactNode
}

export const sidebarItems: SidebarItem[] = [
  {
    name: "Hồ sơ",
    path: "/user/profile",
    icon: <AiOutlineUser />,
  },
  {
    name: "Địa chỉ",
    path: "/user/address",
    icon: <FiMapPin />,
  },
  {
    name: "Đơn hàng",
    path: "/user/orders",
    icon: <FiShoppingBag />,
  },
]

export default function Sidebar() {
  const router = useRouter()

  return (
    <div>
      {sidebarItems.map((item) => (
        <Link href={item.path} key={item.name}>
          <div
            className={clsx(
              "mb-1 p-2 flex items-center gap-2 rounded-lg",
              router.pathname === item.path
                ? "bg-black text-white"
                : "hover:bg-gray-100"
            )}
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}
