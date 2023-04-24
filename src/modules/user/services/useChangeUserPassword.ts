import { api } from "@/configs/api"
import { useMutation } from "@tanstack/react-query"
import { ChangeUserPasswordDto } from "../dto/change-user-password.dto"
import { User } from "../interfaces/user.interface"

export default function useChangeUserPassword() {
  return useMutation((data: ChangeUserPasswordDto) =>
    api.patch<User>("/users/password", data)
  )
}
