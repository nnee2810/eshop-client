import Button from "@/components/core/Button"
import Field from "@/components/core/field"
import { useUserStore } from "@/store/useUserStore"
import { useEffect } from "react"
import { FormProvider } from "react-hook-form"
import { genderOptions } from "../constant"
import useFormUpdateUserProfile from "../hooks/useFormUpdateUserProfile"

interface FormUpdateUserProfileProps {
  onChangeUserPassword: () => void
}

export default function FormUpdateUserProfile({
  onChangeUserPassword,
}: FormUpdateUserProfileProps) {
  const { user } = useUserStore()
  const { methods, handleSubmit, isLoading } = useFormUpdateUserProfile()

  useEffect(() => {
    if (user) {
      const { email, name, gender } = user
      methods.reset({
        email,
        name,
        gender,
      })
    }
  }, [user])

  return (
    <FormProvider {...methods}>
      <form className="max-w-xl space-y-2" onSubmit={handleSubmit}>
        <div className="flex items-end gap-2">
          <div className="flex-1">
            <Field variant="text" name="email" label="Email" disabled />
          </div>
          <Button type="button" className="btn-outline">
            Thay đổi
          </Button>
        </div>
        <div className="flex items-end gap-2">
          <div className="flex-1">
            <Field
              variant="text"
              name="password"
              type="password"
              label="Mật khẩu"
              disabled
            />
          </div>
          <Button
            type="button"
            className="btn-outline"
            onClick={onChangeUserPassword}
          >
            Thay đổi
          </Button>
        </div>

        <Field variant="text" name="name" label="Họ tên" />
        <Field
          variant="select"
          name="gender"
          label="Giới tính"
          options={genderOptions}
        />
        <Button className="w-full" loading={isLoading}>
          Cập nhập
        </Button>
      </form>
    </FormProvider>
  )
}
