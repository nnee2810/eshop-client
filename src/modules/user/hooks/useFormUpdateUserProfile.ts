import { validationMessages } from "@/helpers/validationMessages"
import { useUserStore } from "@/store/useUserStore"
import { joiResolver } from "@hookform/resolvers/joi"
import Joi from "joi"
import _ from "lodash"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { UserGender } from "../interfaces/user.interface"
import useUpdateUserProfile from "../services/useUpdateUserProfile"

interface FormValues {
  email: string
  password: string
  name: string
  gender: string
}

const formSchema = Joi.object<FormValues, true>({
  email: Joi.string().label("Email").messages(validationMessages),
  password: Joi.string().label("Mật khẩu").messages(validationMessages),
  name: Joi.string()
    .label("Họ tên")
    .required()
    .trim()
    .messages(validationMessages),
  gender: Joi.string()
    .label("Giới tính")
    .required()
    .valid(...Object.keys(UserGender))
    .messages(validationMessages),
})

export default function useFormUpdateUserProfile() {
  const { user, setUser } = useUserStore()
  const { mutate, isLoading } = useUpdateUserProfile()
  const methods = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "password",
      name: "",
      gender: "",
    },
    resolver: joiResolver(formSchema),
  })

  const handleSubmit = methods.handleSubmit(
    ({ email, password, ...values }) => {
      if (
        _.isEqual(
          {
            name: user?.name,
            gender: user?.gender,
          },
          values
        )
      )
        toast.error("Vui lòng nhập thông tin mới")
      else
        mutate(values, {
          onSuccess({ data }) {
            setUser(data)
            toast.success("Cập nhật hồ sơ người dùng thành công")
          },
        })
    }
  )

  return { methods, handleSubmit, isLoading }
}
