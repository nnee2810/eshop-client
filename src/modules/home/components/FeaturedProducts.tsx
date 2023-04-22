import ResponsiveBox from "@/components/common/ResponsiveBox"
import ProductBox from "@/modules/products/components/ProductBox"
import products from "@/seeds/products.json"
import { useCallback, useState } from "react"
import SwiperEvent, { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import SectionTitle from "./SectionTitle"

export default function FeaturedProducts() {
  const [swiperProgress, setSwiperProgress] = useState(0)
  const handleSlideChange = useCallback(
    (event: SwiperEvent) => {
      setSwiperProgress(+event.progress.toFixed(2))
    },
    [setSwiperProgress]
  )

  return (
    <ResponsiveBox>
      <SectionTitle>Sản phẩm nổi bật</SectionTitle>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          disableOnInteraction: false,
        }}
        slidesPerView="auto"
        spaceBetween={32}
        onSlideChange={handleSlideChange}
      >
        {products
          .filter((item) => item.isFeatured)
          .map((item) => (
            <SwiperSlide className="w-[300px]" key={item.id}>
              <ProductBox data={item} key={item.id} />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="mt-8 flex justify-center">
        <div className="w-1/2 h-2.5 bg-gray-200 rounded-xl">
          <div
            className="h-full bg-black rounded-xl transition-all"
            style={{ width: swiperProgress * 100 + "%" }}
          ></div>
        </div>
      </div>
    </ResponsiveBox>
  )
}
