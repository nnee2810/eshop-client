import { Regex } from "@/configs/constants"
import { validationMessage } from "@/helpers/validationMessage"
import { useUserStore } from "@/store/useUserStore"
import { yupResolver } from "@hookform/resolvers/yup"
import { isEmail } from "class-validator"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import * as yup from "yup"
import useSignIn from "../services/useSignIn"

interface FormValues {
  email: string
  password: string
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
})

export default function useFormSignIn() {
  const { mutate, isLoading } = useSignIn()
  const methods = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(formSchema),
  })
  const { setUser } = useUserStore()

  const handleSubmit = methods.handleSubmit((values) => {
    mutate(values, {
      onSuccess({ data }) {
        setUser(data)
        toast.success("Đăng nhập thành công")
      },
    })
  })

  return {
    methods,
    handleSubmit,
    isLoading,
  }
}
