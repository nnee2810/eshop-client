export enum UserGender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}
export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
  GUEST = "GUEST",
}

export interface User {
  id: string
  createdAt: string
  updatedAt: string

  email: string
  name: string
  gender: UserGender
  role: UserRole
}
