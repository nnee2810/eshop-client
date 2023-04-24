import { Regex } from "@/configs/constants"
import {
  validationMessages,
  validationPasswordMessages,
} from "@/helpers/validationMessages"
import { useUserStore } from "@/store/useUserStore"
import { joiResolver } from "@hookform/resolvers/joi"
import Joi from "joi"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import useChangeUserPassword from "../services/useChangeUserPassword"

interface FormValues {
  currentPassword: string
  newPassword: string
  confirmNewPassword: string
}

const formSchema = Joi.object<FormValues, true>({
  currentPassword: Joi.string()
    .label("Mật khẩu hiện tại")
    .required()
    .regex(Regex.PASSWORD)
    .messages({
      ...validationMessages,
      ...validationPasswordMessages,
    }),
  newPassword: Joi.string()
    .label("Mật khẩu mới")
    .required()
    .regex(Regex.PASSWORD)
    .invalid(Joi.ref("currentPassword"))
    .messages({
      ...validationMessages,
      ...validationPasswordMessages,
      "any.invalid": '{{#label}} phải khác "Mật khẩu hiện tại"',
    }),
  confirmNewPassword: Joi.string()
    .label("Nhập lại mật khẩu mới")
    .required()
    .valid(Joi.ref("newPassword"))
    .messages({
      ...validationMessages,
      "any.only": '{{#label}} phải khớp với "Mật khẩu mới"',
    }),
})

export default function useFormChangeUserPassword(onSuccess?: () => void) {
  const { setUser } = useUserStore()
  const { mutate, isLoading } = useChangeUserPassword()
  const methods = useForm<FormValues>({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    resolver: joiResolver(formSchema),
  })

  const handleSubmit = methods.handleSubmit(
    ({ confirmNewPassword, ...values }) => {
      mutate(values, {
        onSuccess({ data }) {
          setUser(data)
          toast.success("Đổi mật khẩu thành công")
          onSuccess?.()
        },
      })
    }
  )

  return { methods, handleSubmit, isLoading }
}
