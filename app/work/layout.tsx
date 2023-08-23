import { Metadata } from "next"
import Providers from "../providers"
import "../globals.css"
import { inter } from "../fonts"

export const metadata: Metadata = {
  title: "Work - Raagul",
  description:
    "Professional work history of Raagul and the projects he's been part of.",
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
