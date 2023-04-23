import Button from "@/components/core/Button"
import Field from "@/components/core/field"
import { PageProps } from "@/interfaces/page-props.interface"
import HomeLayout from "@/layouts/home"
import UserLayout from "@/layouts/user"
import { genderOptions } from "@/modules/user/constant"
import useFormUpdateUserProfile from "@/modules/user/hooks/useFormUpdateUserProfile"
import { UserRole } from "@/modules/user/interfaces/user.interface"
import { useUserStore } from "@/store/useUserStore"
import { GetStaticPropsResult } from "next"
import { useEffect } from "react"
import { FormProvider } from "react-hook-form"

export function getStaticProps(): GetStaticPropsResult<PageProps> {
  return {
    props: {
      title: "Hồ sơ người dùng",
      roles: [UserRole.USER, UserRole.ADMIN],
    },
  }
}

export default function UserProfilePage() {
  const { user } = useUserStore()
  const { methods, handleSubmit } = useFormUpdateUserProfile()

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
    <HomeLayout>
      <UserLayout>
        <FormProvider {...methods}>
          <form className="max-w-xl space-y-2" onSubmit={handleSubmit}>
            <div className="flex items-end gap-2">
              <div className="flex-1">
                <Field variant="text" name="email" label="Email" disabled />
              </div>
              <Button className="btn-outline">Thay đổi</Button>
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
              <Button className="btn-outline">Thay đổi</Button>
            </div>

            <Field variant="text" name="name" label="Họ tên" />
            <Field
              variant="select"
              name="gender"
              label="Giới tính"
              options={genderOptions}
            />
            <Button className="w-full">Cập nhập</Button>
          </form>
        </FormProvider>
      </UserLayout>
    </HomeLayout>
  )
}
