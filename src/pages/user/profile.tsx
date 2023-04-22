import ResponsiveBox from "@/components/common/ResponsiveBox"
import Breadcrumbs from "@/components/core/Breadcrumbs"
import { PageProps } from "@/interfaces/page-props.interface"
import HomeLayout from "@/layouts/home"
import { GetStaticPropsResult } from "next"

export function getStaticProps(): GetStaticPropsResult<PageProps> {
  return {
    props: {
      title: "Hồ sơ người dùng",
      roles: [],
    },
  }
}

export default function UserProfilePage() {
  return (
    <HomeLayout>
      <ResponsiveBox>
        <Breadcrumbs
          items={[
            {
              name: "Trang chủ",
              path: "/",
            },
            {
              name: "Hồ sơ người dùng",
              path: "",
            },
          ]}
        />
      </ResponsiveBox>
    </HomeLayout>
  )
}
