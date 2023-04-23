import Button from "@/components/core/Button"
import Field from "@/components/core/field"
import { PageProps } from "@/interfaces/page-props.interface"
import useFormSignIn from "@/modules/auth/hooks/useFormSignIn"
import { UserRole } from "@/modules/user/interfaces/user.interface"
import clsx from "clsx"
import { GetStaticPropsResult } from "next"
import Link from "next/link"
import { FormProvider } from "react-hook-form"

export function getStaticProps(): GetStaticPropsResult<PageProps> {
  return {
    props: {
      title: "Đăng nhập",
      roles: [UserRole.GUEST],
    },
  }
}

export default function SignInPage() {
  const { methods, handleSubmit, isLoading } = useFormSignIn()

  return (
    <div
      className={clsx(
        "h-screen flex justify-center items-center bg-cover bg-center",
        "bg-[url('https://res.cloudinary.com/nnee/image/upload/v1681557963/eshop/general/4882619_fot9jy.jpg')]"
      )}
    >
      <div className="max-w-lg w-full px-10 py-8 bg-white border rounded-xl shadow-xl">
        <div className="text-center">
          <div className="text-3xl font-bold">Đăng nhập</div>
          <div className="mt-2">
            Chưa có tài khoản?{" "}
            <Link href="/auth/sign-up" className="link">
              Tạo tài khoản
            </Link>
          </div>
        </div>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit} className="mt-6 space-y-2">
            <Field variant="text" name="email" label="Email" />
            <Field
              variant="text"
              type="password"
              name="password"
              label="Mật khẩu"
            />
            <div className="text-right">
              <Link href="/auth/forgot-password" className="link">
                Quên mật khẩu
              </Link>
            </div>
            <Button loading={isLoading} className="w-full btn-primary">
              Đăng nhập
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}
