import { useForm } from "react-hook-form"

interface FormValues {
  email: string
  password: string
  name: string
  gender: string
}

export default function useFormUpdateUserProfile() {
  const methods = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "password",
      name: "",
      gender: "",
    },
    // resolver: yupResolver(formSchema),
  })

  const handleSubmit = methods.handleSubmit((values) => {
    console.log(values)
  })

  return { methods, handleSubmit }
}
