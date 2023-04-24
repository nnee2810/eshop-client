import clsx from "clsx"
import { PropsWithChildren } from "react"
import ReactFocusLock from "react-focus-lock"

export interface ModalProps extends PropsWithChildren {
  visible: boolean
  onClose?: () => void
}
export default function Modal({ visible, onClose, children }: ModalProps) {
  return (
    <ReactFocusLock>
      <div
        className={clsx("modal", {
          "visible opacity-100 pointer-events-auto": visible,
        })}
      >
        <div className="modal-box p-0">{children}</div>
      </div>
    </ReactFocusLock>
  )
}

export function ModalHeader({ children }: PropsWithChildren) {
  return <div className="px-6 py-4 text-xl font-medium">{children}</div>
}
export function ModalContent({ children }: PropsWithChildren) {
  return <div className="px-6 py-2">{children}</div>
}

export function ModalFooter({ children }: PropsWithChildren) {
  return <div className="px-6 py-4 flex justify-end gap-2">{children}</div>
}
