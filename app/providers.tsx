"use client"
import { FC, ReactNode } from "react"
import { ThemeProvider } from "next-themes"

interface Data {
  children: ReactNode
}

const Providers: FC<Data> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default Providers
