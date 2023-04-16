import { QueryClient } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { toast } from "react-hot-toast"

export function onError(error: unknown) {
  if (error instanceof AxiosError) {
    toast.error(error.response?.data?.message || "Không thể xử lí yêu cầu")
  } else toast.error("Không thể xử lí yêu cầu")
}
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      onError,
    },
    mutations: {
      onError,
    },
  },
})
