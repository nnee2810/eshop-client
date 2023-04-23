import { api } from "@/configs/api"
import { User } from "@/modules/user/interfaces/user.interface"
import { useMutation } from "@tanstack/react-query"
import { SignInDto } from "../dto/sign-in.dto"

export default function useSignIn() {
  return useMutation((data: SignInDto) => api.post<User>("/auth/sign-in", data))
}
