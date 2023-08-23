import Providers from "../providers"
import "../globals.css"
import { inter } from "../fonts"

export const metadata = {
  title: "Projects - Raagul",
  description:
    "A non-exhaustive list of personal & side projects Raagul has worked on till date.",
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
