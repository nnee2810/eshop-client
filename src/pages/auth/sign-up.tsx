import Button from "@/components/core/Button"
import Field from "@/components/core/field"
import { PageProps } from "@/interfaces/page-props.interface"
import useFormSignUp from "@/modules/auth/hooks/useFormSignUp"
import { UserGender, UserRole } from "@/modules/users/interfaces/user.interface"
import clsx from "clsx"
import { GetStaticPropsResult } from "next"
import Link from "next/link"
import { FormProvider } from "react-hook-form"

export function getStaticProps(): GetStaticPropsResult<PageProps> {
  return {
    props: {
      title: "Tạo tài khoản",
      roles: [UserRole.GUEST],
    },
  }
}

export default function SignUp() {
  const { methods, handleSubmit, isLoading } = useFormSignUp()

  return (
    <div
      className={clsx(
        "h-screen flex justify-center items-center bg-cover bg-center",
        "bg-[url('https://res.cloudinary.com/nnee/image/upload/v1681557963/eshop/general/4882619_fot9jy.jpg')]"
      )}
    >
      <div className="max-w-lg w-full px-10  py-8 bg-white border rounded-xl shadow-xl">
        <div className="text-center">
          <div className="text-3xl font-bold">Tạo tài khoản</div>
          <div className="mt-2">
            Đã có tài khoản? <Link href="/auth/sign-in">Đăng nhập</Link>
          </div>
        </div>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit} className="mt-6 space-y-2">
            <Field variant="text" name="name" label="Họ tên" />
            <Field
              variant="select"
              name="gender"
              label="Giới tính"
              options={[
                {
                  label: "Nam",
                  value: UserGender.MALE,
                },
                {
                  label: "Nữ",
                  value: UserGender.FEMALE,
                },
              ]}
            />
            <Field variant="text" name="email" label="Email" />
            <Field
              variant="text"
              type="password"
              name="password"
              label="Mật khẩu"
            />
            <Field
              variant="text"
              type="password"
              name="confirmPassword"
              label="Xác nhận mật khẩu"
            />
            <Button colorScheme="primary" fullWidth isloading={isLoading}>
              Tạo
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}
