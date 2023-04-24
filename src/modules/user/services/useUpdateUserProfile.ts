import { api } from "@/configs/api"
import { useMutation } from "@tanstack/react-query"
import { UpdateUserProfileDto } from "../dto/update-user-profile.dto"
import { User } from "../interfaces/user.interface"

export default function useUpdateUserProfile() {
  return useMutation((data: UpdateUserProfileDto) =>
    api.patch<User>("/users/profile/me", data)
  )
}
