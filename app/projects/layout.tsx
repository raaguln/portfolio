import Providers from "../providers"
import "../globals.css"
import { inter } from "../fonts"

export const metadata = {
  title: "Blog - Raagul",
  description: "Portfolio of Raagul Nagendran.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
