import ResponsiveBox from "@/components/common/ResponsiveBox"
import Vortex from "@/components/common/Vortex"
import Dropdown from "@/components/core/Dropdown"
import Menu, { MenuItem } from "@/components/core/Menu"
import { useUserStore } from "@/store/useUserStore"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import { useCallback, useEffect, useRef, useState } from "react"
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai"
import { FiShoppingBag } from "react-icons/fi"

interface NavItem {
  name: string
  path: string
}

const navItems: NavItem[] = [
  {
    name: "Trang chủ",
    path: "/",
  },
  {
    name: "Flash Sale",
    path: "/flash-sale",
  },
  {
    name: "Sản phẩm",
    path: "/products",
  },
  {
    name: "Bộ sưu tập",
    path: "/collections",
  },

  {
    name: "Liên hệ",
    path: "/contact",
  },
]

export default function Header() {
  const router = useRouter()
  const { user, clearUser } = useUserStore()
  const [visible, setVisible] = useState(true)
  const lastScrollTop = useRef(0)

  const handleScroll = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop
    if (scrollTop < 500) setVisible(true)
    else {
      if (scrollTop < lastScrollTop.current) setVisible(true)
      else setVisible(false)
    }
    lastScrollTop.current = scrollTop
  }, [setVisible])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  return (
    <div
      className={clsx(
        "sticky top-0 bg-white transition-all z-40",
        visible ? "" : "-translate-y-full"
      )}
    >
      <div className="py-1 bg-black text-sm text-white text-center">
        Tạo tài khoản và nhận <b>voucher giảm giá 20%</b> cho đơn đầu tiên!{" "}
        <b className="underline">
          <Link href="/auth/sign-up">Tạo ngay</Link>
        </b>
      </div>
      <ResponsiveBox>
        <div className="grid grid-cols-[repeat(3,auto)] items-center py-6">
          <div>
            <img
              src="https://res.cloudinary.com/nnee/image/upload/v1681707610/eshop/general/logo-black_hdfewq.png"
              className="h-12"
              alt=""
            />
          </div>
          <div className="place-content-center flex gap-4">
            {navItems.map((item) => (
              <Link
                href={item.path}
                className={clsx(
                  "text-lg font-medium",
                  "hover:text-black",
                  item.path === router.pathname
                    ? "text-black"
                    : "text-gray-400 "
                )}
                key={item.name}
              >
                <Vortex>{item.name}</Vortex>
              </Link>
            ))}
          </div>
          <div className="place-content-end flex gap-4 text-xl">
            <AiOutlineSearch />
            <FiShoppingBag />
            {user ? (
              <Dropdown label={<AiOutlineUser />} placement="bottom-end">
                <Menu>
                  <MenuItem onClick={() => router.push("/user/profile")}>
                    Hồ sơ người dùng
                  </MenuItem>
                  <MenuItem onClick={clearUser}>Đăng xuất</MenuItem>
                </Menu>
              </Dropdown>
            ) : (
              <Link href="/auth/sign-in">
                <AiOutlineUser />
              </Link>
            )}
          </div>
        </div>
      </ResponsiveBox>
    </div>
  )
}
