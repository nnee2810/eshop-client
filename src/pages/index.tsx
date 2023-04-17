import ForbiddenScreen from "@/components/common/ForbiddenScreen"
import { PageProps } from "@/interfaces/page-props.interface"
import HomeLayout from "@/layouts/home"
import { GetStaticPropsResult } from "next"

export function getStaticProps(): GetStaticPropsResult<PageProps> {
  return {
    props: {
      title: "Home",
      roles: [],
    },
  }
}

export default function Home() {
  return (
    <HomeLayout>
      <ForbiddenScreen />
    </HomeLayout>
  )
}
