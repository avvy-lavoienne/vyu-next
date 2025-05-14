import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VyuApp - Innovative Technology Solutions",
  description:
    "VyuApp is a forward-thinking technology company delivering cutting-edge solutions for modern businesses.",
  openGraph: {
    title: "VyuApp - Innovative Technology Solutions",
    description:
      "VyuApp is a forward-thinking technology company delivering cutting-edge solutions for modern businesses.",
    url: "https://vyuapp.com",
    siteName: "VyuApp",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VyuApp",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
