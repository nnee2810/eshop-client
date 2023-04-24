import Button from "@/components/core/Button"
import Modal, {
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalProps,
} from "@/components/core/Modal"
import Field from "@/components/core/field"
import { useEffect } from "react"
import { FormProvider } from "react-hook-form"
import useFormChangeUserPassword from "../hooks/useFormChangeUserPassword"

export default function ModalChangeUserPassword({
  visible,
  onClose,
}: ModalProps) {
  const { methods, handleSubmit, isLoading } =
    useFormChangeUserPassword(onClose)

  useEffect(() => {
    if (visible) {
      methods.setFocus("currentPassword")
    }
  }, [visible])

  return (
    <Modal visible={visible}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit}>
          <ModalHeader>Đổi mật khẩu</ModalHeader>
          <ModalContent>
            <div>
              <Field
                variant="text"
                type="password"
                name="currentPassword"
                label="Mật khẩu hiện tại"
                autoFocus
              />
              <Field
                variant="text"
                type="password"
                name="newPassword"
                label="Mật khẩu mới"
              />
              <Field
                variant="text"
                type="password"
                name="confirmNewPassword"
                label="Nhập lại mật khẩu mới"
              />
            </div>
          </ModalContent>
          <ModalFooter>
            <Button
              type="button"
              disabled={isLoading}
              className="btn-ghost"
              onClick={onClose}
            >
              Đóng
            </Button>
            <Button loading={isLoading}>Đổi</Button>
          </ModalFooter>
        </form>
      </FormProvider>
    </Modal>
  )
}
