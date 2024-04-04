import "./globals.css"
import { PageLayout } from "@/components/layout/page-layout"
import { QueryProvider } from "@/components/layout/query-provider"
import { ThemeProvider } from "@/components/layout/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { Poppins } from "next/font/google"
import React from "react"


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"]
})

const TOASTER_DURATION = 3000

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider>
          <QueryProvider>
            <PageLayout>{children}</PageLayout>
            <Toaster duration={TOASTER_DURATION} />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
