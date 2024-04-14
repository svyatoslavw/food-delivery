"use client"

import { Sidebar } from "@/components/layout/sidebar/Sidebar"
import { Toaster } from "@/components/ui/sonner"
import { AuthApiError, AuthError, QueryError } from "@supabase/supabase-js"
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Provider } from "jotai"
import { ThemeProvider as NextThemeProvider } from "next-themes"
import { usePathname } from "next/navigation"
import * as React from "react"
import { toast } from "sonner"


export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const TOASTER_MESSAGE = "Something went wrong"
  const TOASTER_DURATION = 3000

  const client = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false, staleTime: Infinity } },
    queryCache: new QueryCache({
      onError: (cause) => {
        const { message } = cause as QueryError | AuthError | AuthApiError
        toast.error(message ?? TOASTER_MESSAGE)
      }
    }),
    mutationCache: new MutationCache({
      onError: (cause) => {
        const { message } = cause as QueryError | AuthError | AuthApiError
        toast.error(message ?? TOASTER_MESSAGE)
      }
    })
  })

  return (
    <Provider>
      <QueryClientProvider client={client}>
        <NextThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <main className="flex">
            {!pathname.includes("auth") && <Sidebar isAdmin={pathname.includes("admin")} />}
            <div className="w-full dark:bg-foreground/[0.02] bg-foreground/[0.02] px-10 ">{children}</div>
          </main>
          <Toaster duration={TOASTER_DURATION} />
        </NextThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  )
}
