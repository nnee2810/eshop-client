import { api } from "@/configs/api"
import { User } from "@/modules/users/interfaces/user.interface"
import { useUserStore } from "@/store/useUserStore"
import { useMutation } from "@tanstack/react-query"

export default function useCheckAuth() {
  const { setUser, clearUser } = useUserStore()

  return useMutation(() => api.get<User>("/auth/check"), {
    onSuccess({ data }) {
      setUser(data)
    },
    onError() {
      clearUser()
    },
  })
}
