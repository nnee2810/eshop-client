import { queryClient } from "@/configs/queryClient"
import { PageProps } from "@/interfaces/page-props.interface"
import AuthLayout from "@/layouts/AuthLayout"
import "@/styles/globals.css"
import { QueryClientProvider } from "@tanstack/react-query"
import type { AppProps } from "next/app"
import Head from "next/head"
import { Toaster } from "react-hot-toast"

export default function App({ Component, pageProps }: AppProps<PageProps>) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Eshop {pageProps.title ? `| ${pageProps.title}` : ""}</title>
      </Head>
      <AuthLayout {...pageProps}>
        <Component {...pageProps} />
      </AuthLayout>
      <Toaster />
    </QueryClientProvider>
  )
}
