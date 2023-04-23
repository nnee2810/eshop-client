import Bagde from "@/components/core/Bagde"
import { ProductsQuery, useProductsStore } from "@/store/useProductsStore"
import { isNotEmptyObject } from "class-validator"
import {
  brandOptions,
  categoryOptions,
  colorOptions,
  orderByOptions,
} from "../constant"

export default function ProductFilterTags() {
  const { query, setQuery, clearQuery } = useProductsStore()

  const handleDeleteTag = (key: keyof ProductsQuery, idx: number = -1) => {
    const tempQuery = structuredClone(query)
    if (
      idx >= 0 &&
      (key === "category" || key === "brand" || key === "color")
    ) {
      tempQuery[key]?.splice(idx, 1)
    } else {
      delete tempQuery[key]
    }
    setQuery(tempQuery)
  }

  return isNotEmptyObject(query) ? (
    <div
      className="-mt-32 pt-32 flex flex-wrap items-center gap-2"
      id="filter-tags"
    >
      <span>Bộ lọc áp dụng:</span>
      {!!query?.name?.length && (
        <Bagde
          className="badge-lg badge-outline"
          onDelete={() => handleDeleteTag("name")}
        >
          {query.name}
        </Bagde>
      )}

      {!!query?.orderBy?.length && (
        <Bagde
          className="badge-lg badge-outline"
          onDelete={() => handleDeleteTag("orderBy")}
        >
          {orderByOptions.find((item) => item.value === query.orderBy)?.label}
        </Bagde>
      )}

      {query?.category?.map((item, idx) => (
        <Bagde
          className="badge-lg badge-outline"
          onDelete={() => handleDeleteTag("category", idx)}
          key={idx}
        >
          {categoryOptions.find((option) => option.value === item)?.label}
        </Bagde>
      ))}

      {query?.brand?.map((item, idx) => (
        <Bagde
          className="badge-lg badge-outline"
          key={idx}
          onDelete={() => handleDeleteTag("brand", idx)}
        >
          {brandOptions.find((option) => option.value === item)?.label}
        </Bagde>
      ))}

      {query?.color?.map((item, idx) => (
        <Bagde
          className="badge-lg badge-outline"
          key={idx}
          onDelete={() => handleDeleteTag("color", idx)}
        >
          {colorOptions.find((option) => option.value === item)?.label}
        </Bagde>
      ))}

      <Bagde className="badge-lg cursor-pointer" onClick={clearQuery}>
        Xóa bộ lọc
      </Bagde>
    </div>
  ) : null
}
