import ResponsiveBox from "@/components/common/ResponsiveBox"
import Breadcrumbs from "@/components/core/Breadcrumbs"
import { PageProps } from "@/interfaces/page-props.interface"
import HomeLayout from "@/layouts/home"
import FormProductFilter from "@/modules/products/components/FormProductFilter"
import ProductFilterTags from "@/modules/products/components/ProductFilterTags"
import ProductList from "@/modules/products/components/ProductList"
import { UserRole } from "@/modules/user/interfaces/user.interface"
import { GetStaticPropsResult } from "next"

export function getStaticProps(): GetStaticPropsResult<PageProps> {
  return {
    props: {
      title: "Sản phẩm",
      roles: [UserRole.USER, UserRole.ADMIN],
    },
  }
}

export default function ProductListPage() {
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
              name: "Sản phẩm",
              path: "",
            },
          ]}
        />
        <div className="grid md:grid-cols-[300px_auto] items-start gap-6">
          <FormProductFilter />
          <div className="space-y-6">
            <ProductFilterTags />
            <ProductList />
          </div>
        </div>
      </ResponsiveBox>
    </HomeLayout>
  )
}
