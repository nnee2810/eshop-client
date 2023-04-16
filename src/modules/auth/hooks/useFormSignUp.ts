import { Regex } from "@/configs/constants"
import { validationMessage } from "@/helpers/validationMessage"
import { UserGender } from "@/modules/users/interfaces/user.interface"
import { yupResolver } from "@hookform/resolvers/yup"
import { isEmail } from "class-validator"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import * as yup from "yup"
import useSignUp from "../services/useSignUp"

interface FormValues {
  email: string
  password: string
  confirmPassword: string
  name: string
  gender: string
}

const formSchema: yup.ObjectSchema<FormValues> = yup.object({
  email: yup
    .string()
    .label("Email")
    .required(validationMessage.required)
    .test({
      test: (value) => isEmail(value),
      message: validationMessage.invalid,
    }),
  password: yup
    .string()
    .label("Mật khẩu")
    .required(validationMessage.required)
    .matches(Regex.PASSWORD, {
      message: validationMessage.password,
    }),
  confirmPassword: yup
    .string()
    .label("Xác nhận mật khẩu")
    .required(validationMessage.required)
    .oneOf([yup.ref("password")], "Không khớp mật khẩu"),
  name: yup.string().label("Họ tên").required(validationMessage.required),
  gender: yup
    .string()
    .label("Giới tính")
    .required(validationMessage.required)
    .oneOf(Object.keys(UserGender)),
})

export default function useFormSignUp() {
  const router = useRouter()
  const { mutate, isLoading } = useSignUp()
  const methods = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      gender: "",
    },
    resolver: yupResolver(formSchema),
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
