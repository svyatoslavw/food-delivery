"use client"

import { AuthApiError, AuthError, QueryError } from "@supabase/supabase-js"
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import React, { ReactNode } from "react"
import { toast } from "sonner"


const QueryProvider = ({ children }: { children: ReactNode }) => {
  const TOASTER_MESSAGE = "Something went wrong"
  const queryClient = new QueryClient({
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
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
export { QueryProvider }
