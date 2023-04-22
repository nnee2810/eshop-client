import { Product } from "@/modules/products/interfaces/product.interface"
import { faker } from "@faker-js/faker"

export const productsSeed: Product[] = Array.from({ length: 50 }, () => ({
  id: faker.datatype.uuid(),
  createdAt: faker.date.past().toISOString(),
  updatedAt: faker.date.past().toISOString(),
  name: faker.commerce.productName(),
  price: +faker.commerce.price(),
  salePrice: +faker.commerce.price(),
  stock: +faker.datatype.number({ min: 0, max: 10 }),
  forSale: true,
  inSale: faker.datatype.boolean(),
  isFeatured: faker.datatype.boolean(),
  images: Array.from(
    {
      length: faker.datatype.number({
        min: 1,
        max: 3,
      }),
    },
    () => ({
      id: faker.datatype.uuid(),
      createdAt: faker.date.past().toISOString(),
      updatedAt: faker.date.past().toISOString(),
      productId: faker.datatype.uuid(),
      src: faker.helpers.arrayElement([
        "https://res.cloudinary.com/nnee/image/upload/v1681836121/eshop/recommends/full-shot-man-posing-grandstands_igdol6.jpg",
        "https://res.cloudinary.com/nnee/image/upload/v1681836120/eshop/recommends/portrait-young-lady-sittin-white-box-looking-camera-high-quality-photo_cerhhq.jpg",
        "https://res.cloudinary.com/nnee/image/upload/v1681836120/eshop/recommends/male-female-walking-different-directions_tdejoq.jpg",
      ]),
    })
  ),
}))
