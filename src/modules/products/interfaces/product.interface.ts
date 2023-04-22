import { ProductImage } from "./product-image.interface"

export interface Product {
  id: string
  createdAt: string
  updatedAt: string

  name: string
  price: number
  salePrice: number
  stock: number
  forSale: boolean
  inSale: boolean
  isFeatured: boolean
  images: ProductImage[]
}
