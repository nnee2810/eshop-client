import { Regex } from "@/configs/constants"
import { validationMessages } from "@/helpers/validationMessages"
import { genderOptions } from "@/modules/user/constant"
import { joiResolver } from "@hookform/resolvers/joi"
import { isEmail } from "class-validator"
import Joi from "joi"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import useSignUp from "../services/useSignUp"

interface FormValues {
  email: string
  password: string
  confirmPassword: string
  name: string
  gender: string
}

const formSchema = Joi.object<FormValues, true>({
  name: Joi.string()
    .label("Họ tên")
    .required()
    .trim()
    .messages(validationMessages),
  gender: Joi.string()
    .label("Giới tính")
    .required()
    .valid(...genderOptions.map((item) => item.value))
    .messages(validationMessages),
  email: Joi.string()
    .label("Email")
    .required()
    .trim()
    .custom((value, helper) =>
      isEmail(value) ? value : helper.error("any.invalid")
    )
    .messages(validationMessages),
  password: Joi.string()
    .label("Mật khẩu")
    .required()
    .regex(Regex.PASSWORD)
    .messages({
      ...validationMessages,
      "string.pattern.base":
        "{{#label}} phải chứa ít nhất 8 kí tự, gồm chữ in hoa, chữ thường và số",
    }),
  confirmPassword: Joi.string()
    .label("Nhập lại mật khẩu")
    .required()
    .valid(Joi.ref("password"))
    .messages({
      ...validationMessages,
      "any.only": '{{#label}} phải khớp với "Mật khẩu"',
    }),
})

export default function useFormSignUp() {
  const router = useRouter()
  const { mutate, isLoading } = useSignUp()
  const methods = useForm<FormValues>({
    defaultValues: {
      name: "",
      gender: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: joiResolver(formSchema),
  })

  const handleSubmit = methods.handleSubmit(
    ({ confirmPassword, ...values }) => {
      mutate(values, {
        onSuccess() {
          router.push("/auth/sign-in")
          toast.success("Tạo tài khoản thành công, hãy đăng nhập")
        },
      })
    }
  )

  return {
    methods,
    handleSubmit,
    isLoading,
  }
}
