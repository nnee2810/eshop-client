import ResponsiveBox from "@/components/common/ResponsiveBox"
import { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

export default function Banners() {
  return (
    <ResponsiveBox>
      <div className="rounded-lg overflow-hidden">
        <Swiper modules={[Autoplay]} autoplay>
          {[1, 1, 1, 1].map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="h-[750px] bg-[url('https://picsum.photos/1920/1080')]"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </ResponsiveBox>
  )
}
