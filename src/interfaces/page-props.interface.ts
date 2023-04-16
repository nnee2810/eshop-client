import { UserRole } from "@/modules/users/interfaces/user.interface"

export interface PageProps {
  title: string
  roles: UserRole[]
}
