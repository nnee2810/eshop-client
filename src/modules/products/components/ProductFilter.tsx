import Button from "@/components/core/Button"
import Collapse from "@/components/core/Collapse"
import Field from "@/components/core/field"
import { FormProvider } from "react-hook-form"
import {
  brandOptions,
  categoryOptions,
  colorOptions,
  orderByOptions,
} from "../constants"
import useFormProductFilter from "../hooks/useFormProductFilter"

export default function ProductFilter() {
  const { methods, handleSubmit } = useFormProductFilter()

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit}
        className="px-4 py-2 border rounded-lg space-y-2"
      >
        <Field variant="text" name="name" label="Tìm kiếm" />
        <Field
          variant="select"
          name="orderBy"
          label="Sắp xếp theo"
          options={orderByOptions}
        />
        <Collapse label="Phân loại">
          <Field
            variant="checkbox-group"
            name="category"
            options={categoryOptions}
          />
        </Collapse>
        <Collapse label="Nhãn hiệu">
          <Field variant="checkbox-group" name="brand" options={brandOptions} />
        </Collapse>
        <Collapse label="Màu sắc">
          <Field variant="checkbox-group" name="color" options={colorOptions} />
        </Collapse>
        <Button className="w-full">Lọc</Button>
      </form>
    </FormProvider>
  )
}
