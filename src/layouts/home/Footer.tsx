import ResponsiveBox from "@/components/common/ResponsiveBox"
import Link from "next/link"

interface FooterItem {
  name: string
  childrens: {
    name: string
    path: string
  }[]
}

const footerItems: FooterItem[] = [
  {
    name: "Cửa hàng",
    childrens: [
      {
        name: "Bộ sưu tập",
        path: "#",
      },
      {
        name: "Phiên bản mùa hè",
        path: "#",
      },
      {
        name: "Ưu đãi",
        path: "#",
      },
    ],
  },
  {
    name: "Công ty",
    childrens: [
      {
        name: "Về chúng tôi",
        path: "#",
      },
      {
        name: "Liên hệ",
        path: "#",
      },
    ],
  },
  {
    name: "Hỗ trợ",
    childrens: [
      {
        name: "FAQs",
        path: "#",
      },
      {
        name: "Chính sách cookie",
        path: "#",
      },
      {
        name: "Điều khoản sử dụng",
        path: "#",
      },
    ],
  },
]

export default function Footer() {
  return (
    <ResponsiveBox className="mt-20 bg-gray-100">
      <div className="py-10 grid grid-cols-5">
        <div>
          <img
            src="https://res.cloudinary.com/nnee/image/upload/v1681707610/eshop/general/logo-black_hdfewq.png"
            className="h-12"
            alt=""
          />
        </div>
        {footerItems.map((item) => (
          <div key={item.name}>
            <div className="text-lg font-bold uppercase">{item.name}</div>
            <div className="mt-4 space-y-2">
              {item.childrens.map((children) => (
                <div
                  className="text-gray-500 transition-all hover:text-black"
                  key={children.name}
                >
                  <Link href={children.path}>{children.name}</Link>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div>
          <div className="text-lg font-bold uppercase">
            Phương thức thanh toán
          </div>
          <div className="mt-4 flex gap-4">
            {[
              "https://res.cloudinary.com/nnee/image/upload/v1681961962/eshop/general/mastercard_ptjytk.svg",
              "https://res.cloudinary.com/nnee/image/upload/v1681961962/eshop/general/visa_qrywgx.svg",
              "https://res.cloudinary.com/nnee/image/upload/v1681961962/eshop/general/paypal_pnjoa4.svg",
            ].map((src, idx) => (
              <img src={src} alt="" className="w-6" key={idx} />
            ))}
          </div>
        </div>
      </div>
    </ResponsiveBox>
  )
}
