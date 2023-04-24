import { validationMessages } from "@/helpers/validationMessages"
import { ProductsQuery, useProductsStore } from "@/store/useProductsStore"
import { joiResolver } from "@hookform/resolvers/joi"
import Joi from "joi"
import { useForm } from "react-hook-form"
import {
  brandOptions,
  categoryOptions,
  colorOptions,
  orderByOptions,
} from "../constant"

const formSchema = Joi.object({
  name: Joi.string()
    .label("Tên sản phẩm")
    .allow("")
    .messages(validationMessages),
  orderBy: Joi.string()
    .label("Sắp xếp theo")
    .allow("")
    .valid(...orderByOptions.map((item) => item.value)),
  category: Joi.array()
    .label("Danh mục")
    .items(Joi.string().valid(...categoryOptions.map((item) => item.value))),
  brand: Joi.array()
    .label("Nhãn hiệu")
    .items(Joi.string().valid(...brandOptions.map((item) => item.value))),
  color: Joi.array()
    .label("Màu sắc")
    .items(Joi.string().valid(...colorOptions.map((item) => item.value))),
})

export default function useFormProductFilter() {
  const { setQuery } = useProductsStore()
  const methods = useForm<ProductsQuery>({
    defaultValues: {
      name: "",
      orderBy: "",
      category: [],
      brand: [],
      color: [],
    },
    resolver: joiResolver(formSchema),
  })

  const handleSubmit = methods.handleSubmit((values) => {
    document.getElementById("filter-tags")?.scrollIntoView({
      behavior: "smooth",
    })
    setQuery(values)
  })

  return { methods, handleSubmit }
}
