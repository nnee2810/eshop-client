import ResponsiveBox from "@/components/common/ResponsiveBox"
import Button from "@/components/core/Button"
import TextInput from "@/components/core/field/TextInput"
import SectionTitle from "./SectionTitle"

export default function Subscribe() {
  return (
    <ResponsiveBox className="">
      <SectionTitle className="text-center">
        Đăng ký nhận thông tin mới nhất về sản phẩm của chúng tôi
      </SectionTitle>
      <div className="text-center font-medium">
        Đăng ký và nhận ngay ưu đãi giảm 20% đơn đặt hàng đầu tiên
      </div>
      <div className="mt-4 flex justify-center gap-2">
        <TextInput placeholder="Email của bạn" className="w-[400px]" />
        <Button>Đăng ký</Button>
      </div>
    </ResponsiveBox>
  )
}
