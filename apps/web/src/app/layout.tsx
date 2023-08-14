import "./global.css"
import { Bitter, JetBrains_Mono } from "next/font/google"

const sans = Bitter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const fontClasses = `${sans.variable} ${mono.variable}`.trim()
  return (
    <html lang="en" className={fontClasses}>
      <body>
        <div className="h-screen flex flex-col">{children}</div>
      </body>
    </html>
  )
}
