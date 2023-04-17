import { PropsWithChildren } from "react"
import Header from "./Header"

interface HomeLayoutProps extends PropsWithChildren {}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
