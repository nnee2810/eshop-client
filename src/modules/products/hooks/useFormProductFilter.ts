import { ProductsQuery, useProductsStore } from "@/store/useProductsStore"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as yup from "yup"

const formSchema: yup.ObjectSchema<ProductsQuery> = yup.object({
  name: yup.string(),
  orderBy: yup.string(),
  category: yup.array().of(yup.string().required()),
  brand: yup.array().of(yup.string().required()),
  color: yup.array().of(yup.string().required()),
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
    resolver: yupResolver(formSchema),
  })

  const handleSubmit = methods.handleSubmit((values) => {
    document.getElementById("filter-tags")?.scrollIntoView({
      behavior: "smooth",
    })
    setQuery(values)
  })

  return { methods, handleSubmit }
}
