import { UserRole } from "@/modules/user/interfaces/user.interface"

export interface PageProps {
  title: string
  roles: UserRole[]
}
