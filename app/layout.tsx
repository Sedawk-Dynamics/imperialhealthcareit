import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Imperial Healthcare Systems - Healthcare IT Solutions & Digital Transformation",
  description:
    "Healthcare-focused IT solutions built for performance, security & scale. From cloud infrastructure and AI automation to secure healthcare applications — Imperial Healthcare Systems delivers future-ready digital solutions.",
  generator: "v0.app",
  keywords: [
    "Healthcare IT",
    "Digital Transformation",
    "HIPAA Compliance",
    "Healthcare Software",
    "Cloud Infrastructure",
    "AI Healthcare Solutions",
    "Medical Software Development",
  ],
  icons: {
    icon: "/images/imperial-torch.png",
    apple: "/images/imperial-torch.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
