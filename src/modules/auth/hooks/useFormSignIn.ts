import { Regex } from "@/configs/constants"
import { validationMessages } from "@/helpers/validationMessages"
import { useUserStore } from "@/store/useUserStore"
import { joiResolver } from "@hookform/resolvers/joi"
import { isEmail } from "class-validator"
import Joi from "joi"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import useSignIn from "../services/useSignIn"

interface FormValues {
  email: string
  password: string
}

const formSchema = Joi.object<FormValues, true>({
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
})

export default function useFormSignIn() {
  const { mutate, isLoading } = useSignIn()
  const methods = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: joiResolver(formSchema),
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
