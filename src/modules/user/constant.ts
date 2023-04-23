import { SelectOption } from "@/components/core/field/Select"
import { UserGender } from "./interfaces/user.interface"

export const genderOptions: SelectOption[] = [
  {
    label: "Nam",
    value: UserGender.MALE,
  },
  {
    label: "Nữ",
    value: UserGender.FEMALE,
  },
]
