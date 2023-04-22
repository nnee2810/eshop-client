import ResponsiveBox from "@/components/common/ResponsiveBox"
import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import SectionTitle from "./SectionTitle"

export default function Brands() {
  return (
    <ResponsiveBox>
      <SectionTitle>Nhãn hiệu</SectionTitle>
      <Swiper
        modules={[Autoplay]}
        autoplay
        centerInsufficientSlides
        slidesPerView="auto"
        spaceBetween={60}
      >
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, idx) => (
          <SwiperSlide className="w-28 select-none" key={idx}>
            <img src="https://res.cloudinary.com/nnee/image/upload/v1681752867/eshop/brands/chanel_q8f9gi.svg" />
          </SwiperSlide>
        ))}
      </Swiper>
    </ResponsiveBox>
  )
}
