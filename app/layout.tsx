import { Metadata } from "next"
import Providers from "./providers"
import "./globals.css"
import { inter } from "./fonts"

export const metadata: Metadata = {
  title: "Raagul Nagendran",
  description: "Portfolio of Raagul Nagendran.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
