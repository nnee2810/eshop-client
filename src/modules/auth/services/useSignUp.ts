import { api } from "@/configs/api"
import { useMutation } from "@tanstack/react-query"
import { SignUpDto } from "../dto/sign-up.dto"

export default function useSignUp() {
  return useMutation((data: SignUpDto) => api.post("/auth/sign-up", data))
}
