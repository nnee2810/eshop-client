import ResponsiveBox from "@/components/common/ResponsiveBox"
import Button from "@/components/core/Button"
import clsx from "clsx"
import { BsArrowRight } from "react-icons/bs"

export default function LimitedOffer() {
  return (
    <ResponsiveBox>
      <div className="h-[400px] grid grid-cols-2 rounded-lg overflow-hidden">
        <div
          className={clsx(
            "bg-cover bg-center",
            "bg-[url('https://res.cloudinary.com/nnee/image/upload/v1681836120/eshop/recommends/alyssa-strohmann_hvsm6p.jpg')]"
          )}
        ></div>
        <div className="px-20 flex flex-col justify-center items-start bg-gray-800">
          <div className="text-gray-400 text-sm font-bold uppercase">
            Ưu đãi giới hạn
          </div>
          <div className="mt-4 text-white text-4xl font-medium">
            Giảm giá 20% và nhận nhiều phần quà đặc biệt chỉ trong hôm nay
          </div>
          <Button className="mt-10 btn-white">
            Nhận ngay <BsArrowRight />
          </Button>
        </div>
      </div>
    </ResponsiveBox>
  )
}
