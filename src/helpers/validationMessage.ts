import { Message } from "yup"

type MyMessage = {
  label?: string
  path: string
} & Message

export const validationMessage = {
  required: (msg: MyMessage) => `${msg.label || msg.path} không được để trống`,
  invalid: (msg: MyMessage) => `${msg.label || msg.path} không hợp lệ`,
  password: () => `Mật khẩu có ít nhất 8 kí tự, gồm chữ hoa, chữ thường và số`,
}
