import { productsSeed } from "@/seeds/products.seed"
import ProductBox from "./ProductBox"

export default function ProductList() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
      {productsSeed.map((item) => (
        <ProductBox data={item} key={item.id} />
      ))}
    </div>
  )
}
