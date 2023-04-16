import axios, { AxiosError } from "axios"

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
})

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const config = error.config
    if (
      error.response?.status === 401 &&
      config?.url !== "/auth/refresh-token"
    ) {
      const accessToken = await api.get("/auth/refresh-token")
      if (accessToken) return api(config!)
    }
    return Promise.reject(error)
  }
)
