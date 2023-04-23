import ResponsiveBox from "@/components/common/ResponsiveBox"
import Breadcrumbs from "@/components/core/Breadcrumbs"
import { useRouter } from "next/router"
import { PropsWithChildren, useMemo } from "react"
import Sidebar, { sidebarItems } from "./Sidebar"

export default function UserLayout({ children }: PropsWithChildren) {
  const router = useRouter()
  const currentRoute = useMemo(
    () => sidebarItems.find((item) => item.path === router.pathname),
    [router.pathname]
  )

  return (
    <ResponsiveBox>
      <Breadcrumbs
        items={[
          {
            name: "Trang chủ",
            path: "/",
          },
          {
            name: currentRoute?.name || "",
            path: currentRoute?.path || "",
          },
        ]}
      />
      <div className="grid md:grid-cols-[250px_auto] items-start gap-6">
        <Sidebar />
        {children}
      </div>
    </ResponsiveBox>
  )
}
