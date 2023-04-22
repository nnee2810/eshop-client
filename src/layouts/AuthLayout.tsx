import ForbiddenScreen from "@/components/common/ForbiddenScreen"
import LoadingScreen from "@/components/common/loading/LoadingScreen"
import { PageProps } from "@/interfaces/page-props.interface"
import useCheckAuth from "@/modules/auth/services/useCheckAuth"
import { UserRole } from "@/modules/users/interfaces/user.interface"
import { AuthStatus, useUserStore } from "@/store/useUserStore"
import { useRouter } from "next/router"
import { ReactElement, useEffect } from "react"

interface AuthLayoutProps extends PageProps {
  children: ReactElement
}

export default function AuthLayout({ children, roles }: AuthLayoutProps) {
  const router = useRouter()
  const { authStatus, user } = useUserStore()
  const { mutate: checkAuth } = useCheckAuth()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  if (!roles?.length) return children
  if (authStatus === AuthStatus.LOADING) return <LoadingScreen />
  if (roles.includes(UserRole.GUEST)) {
    if (authStatus === AuthStatus.SUCCESS) {
      router.replace("/")
      return <LoadingScreen />
    }
    return children
  } else {
    if (authStatus === AuthStatus.FAIL) {
      router.replace("/auth/sign-in")
      return <LoadingScreen />
    }
    if (roles.includes(user?.role!)) return children
    return <ForbiddenScreen />
  }
}
