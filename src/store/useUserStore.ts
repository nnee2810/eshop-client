import { User } from "@/modules/user/interfaces/user.interface"
import { create } from "zustand"

export enum AuthStatus {
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  FAIL = "FAIL",
}

interface UserState {
  authStatus: AuthStatus
  user: User | null
  setUser(user: User): void
  clearUser(): void
}

export const useUserStore = create<UserState>((set) => ({
  authStatus: AuthStatus.LOADING,
  user: null,
  setUser: (user: User) =>
    set({
      authStatus: AuthStatus.SUCCESS,
      user,
    }),
  clearUser: () =>
    set({
      authStatus: AuthStatus.FAIL,
      user: null,
    }),
}))
