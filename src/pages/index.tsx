import { PageProps } from "@/interfaces/page-props.interface"
import HomeLayout from "@/layouts/home"
import Banners from "@/modules/home/components/Banners"
import Brands from "@/modules/home/components/Brands"
import Commits from "@/modules/home/components/Commits"
import FeaturedProducts from "@/modules/home/components/FeaturedProducts"
import LimitedOffer from "@/modules/home/components/LimitedOffer"
import Recommends from "@/modules/home/components/Recommends"
import { GetStaticPropsResult } from "next"

export function getStaticProps(): GetStaticPropsResult<PageProps> {
  return {
    props: {
      title: "Home",
      roles: [],
    },
  }
}

export default function HomePage() {
  return (
    <HomeLayout>
      <div className="space-y-28">
        <Banners />
        <Brands />
        <Recommends />
        <FeaturedProducts />
        <LimitedOffer />
        <Commits />
      </div>
    </HomeLayout>
  )
}
