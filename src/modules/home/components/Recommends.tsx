import ResponsiveBox from "@/components/common/ResponsiveBox"
import Button from "@/components/core/Button"
import clsx from "clsx"
import { BsArrowRight } from "react-icons/bs"
import SectionTitle from "./SectionTitle"

interface Recommend {
  title: string
  src: string
}

const recommends: Recommend[] = [
  {
    title: "Bán chạy",
    src: "https://res.cloudinary.com/nnee/image/upload/v1681836120/eshop/recommends/male-female-walking-different-directions_tdejoq.jpg",
  },
  {
    title: "Đồ nam",
    src: "https://res.cloudinary.com/nnee/image/upload/v1681836121/eshop/recommends/full-shot-man-posing-grandstands_igdol6.jpg",
  },
  {
    title: "Đồ nữ",
    src: "https://res.cloudinary.com/nnee/image/upload/v1681836120/eshop/recommends/portrait-young-lady-sittin-white-box-looking-camera-high-quality-photo_cerhhq.jpg",
  },
  {
    title: "Khám phá thêm",
    src: "https://res.cloudinary.com/nnee/image/upload/v1681836120/eshop/recommends/alyssa-strohmann_hvsm6p.jpg",
  },
]

export default function Recommends() {
  return (
    <ResponsiveBox>
      <SectionTitle>Lựa chọn hàng đầu</SectionTitle>
      <div className="grid grid-cols-4 gap-8">
        {recommends.map((item) => (
          <div
            className="relative group h-80 bg-cover rounded-lg overflow-hidden"
            style={{ backgroundImage: `url('${item.src}')` }}
            key={item.title}
          >
            <div className="absolute bottom-6 left-0 w-full px-10 flex justify-center">
              <Button className="w-full btn-white">
                {item.title} <BsArrowRight />
              </Button>
            </div>
            <div
              className={clsx(
                "absolute top-0 left-0 w-full h-full bg-black/25 transition-all",
                "group-hover:invisible group-hover:opacity-0"
              )}
            ></div>
          </div>
        ))}
      </div>
    </ResponsiveBox>
  )
}
