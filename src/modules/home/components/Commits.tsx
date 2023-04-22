import ResponsiveBox from "@/components/common/ResponsiveBox"
import { ReactNode } from "react"
import {
  AiOutlineDollarCircle,
  AiOutlineReload,
  AiOutlineSmile,
} from "react-icons/ai"
import { BsLightningCharge } from "react-icons/bs"
import SectionTitle from "./SectionTitle"

interface Commit {
  icon: ReactNode
  title: string
  detail: string
}

const commits: Commit[] = [
  {
    icon: <AiOutlineDollarCircle />,
    title: "Sản phẩm chính hãng",
    detail: "Hoàn tiền 200% nếu sản phẩm là hàng giả",
  },
  {
    icon: <AiOutlineSmile />,
    title: "Đảm bảo hài lòng",
    detail: "1 đổi 1 nếu khách hàng không hài lòng",
  },
  {
    icon: <AiOutlineReload />,
    title: "Sản phẩm mới mỗi ngày",
    detail: "Chúng tôi cập nhật mẫu mới mỗi ngày",
  },
  {
    icon: <BsLightningCharge />,
    title: "Giao hàng nhanh",
    detail: "Vận chuyển hàng nhanh và miễn phí ship cho khách hàng thân thiết",
  },
]

export default function Commits() {
  return (
    <ResponsiveBox>
      <SectionTitle>Cam kết cung cấp trải nghiệm tốt nhất</SectionTitle>
      <div className="grid grid-cols-4 gap-8">
        {commits.map((item) => (
          <div className="space-y-2" key={item.title}>
            <div className="inline-block p-3 text-2xl bg-gray-200 rounded-lg">
              {item.icon}
            </div>
            <div className="text-lg font-medium">{item.title}</div>
            <div className="text-gray-500">{item.detail}</div>
          </div>
        ))}
      </div>
    </ResponsiveBox>
  )
}
