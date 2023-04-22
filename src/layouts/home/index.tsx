import { PropsWithChildren } from "react"
import BackToTop from "./BackToTop"
import Footer from "./Footer"
import Header from "./Header"

interface HomeLayoutProps extends PropsWithChildren {}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
      <Footer />
      <BackToTop />
    </div>
  )
}
