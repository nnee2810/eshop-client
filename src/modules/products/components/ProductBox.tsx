import Button from "@/components/core/Button"
import { useUserStore } from "@/store/useUserStore"
import { useRouter } from "next/router"
import { useCallback } from "react"
import { FiShoppingBag } from "react-icons/fi"
import { Product } from "../interfaces/product.interface"

interface ProductBoxProps {
  data: Product
}

export default function ProductBox({ data }: ProductBoxProps) {
  const router = useRouter()
  const { user } = useUserStore()

  const handleClickAddToCart = useCallback(() => {
    if (!user) router.push("/auth/sign-in")
  }, [router, user])

  return (
    <div className="relative">
      <div
        className="h-[400px] bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url('${data.images[0].src}')` }}
      ></div>
      <div className="mt-2 flex justify-between items-center">
        <div>
          <div className="font-medium">{data.name}</div>
          <div className="flex gap-1">
            <div className="font-bold text-2xl">
              ${data.inSale ? data.salePrice : data.price}
            </div>
            {data.inSale && (
              <div className="text-gray-400 line-through">${data.price}</div>
            )}
          </div>
        </div>
        <Button className="btn-square" onClick={handleClickAddToCart}>
          <FiShoppingBag className="text-xl" />
        </Button>
      </div>
      {data.inSale && (
        <div className="absolute top-4 left-4 px-2 py-1 bg-red-600 text-white text-sm font-medium rounded-md">
          SALE
        </div>
      )}
    </div>
  )
}
