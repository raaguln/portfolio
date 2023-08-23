import { Metadata } from "next"
import Providers from "../providers"
import "../globals.css"
import { inter } from "../fonts"

export const metadata: Metadata = {
  title: "Conference Talks - Raagul",
  description: "Conference talks that Raagul has delivered.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
