"use client"

import { Sidebar } from "@/components/layout/sidebar/Sidebar"
import { Toaster } from "@/components/ui/sonner"
import { Provider } from "jotai"
import { ThemeProvider as NextThemeProvider } from "next-themes"
import { usePathname } from "next/navigation"
import * as React from "react"

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const TOASTER_DURATION = 3000

  return (
    <Provider>
      <NextThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <main className="flex">
          {!pathname.includes("auth") && <Sidebar isAdmin={pathname.includes("admin")} />}
          <div className="w-full dark:bg-foreground/[0.02] bg-foreground/[0.02] px-10 ">{children}</div>
        </main>
        <Toaster duration={TOASTER_DURATION} />
      </NextThemeProvider>
    </Provider>
  )
}
