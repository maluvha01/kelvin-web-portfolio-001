import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import LoadingScreen from "@/components/loading-screen"
import CustomCursor from "@/components/custom-cursor"
import "./globals.css"

export const metadata: Metadata = {
  title: "Kelvin Mutukwa - Web Portfolio",
  description: "Driven by Creativity, Inspired by Machines - UI/UX Designer & Creative Professional",
  generator: "v0.app",
  keywords: ["UI/UX Design", "Graphic Design", "Portfolio", "Creative", "Automotive Design"],
  authors: [{ name: "Kelvin Mutukwa" }],
  openGraph: {
    title: "Kelvin Mutukwa - Web Portfolio",
    description: "Driven by Creativity, Inspired by Machines",
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
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased cursor-none`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <LoadingScreen />
            <CustomCursor />
            {children}
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
