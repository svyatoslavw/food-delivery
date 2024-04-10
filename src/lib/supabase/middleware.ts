import { logout } from "@/app/auth/actions"
import { createServerClient, type CookieOptions } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"

export async function updateSession(request: NextRequest) {
  const PROTECTED_PATHS = ["/settings", "orders"]

  let response = NextResponse.next({
    request: {
      headers: request.headers
    }
  })

  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      get(name: string) {
        return request.cookies.get(name)?.value
      },
      set(name: string, value: string, options: CookieOptions) {
        request.cookies.set({
          name,
          value,
          ...options
        })
        response = NextResponse.next({
          request: {
            headers: request.headers
          }
        })
        response.cookies.set({
          name,
          value,
          ...options
        })
      },
      remove(name: string, options: CookieOptions) {
        request.cookies.set({
          name,
          value: "",
          ...options
        })
        response = NextResponse.next({
          request: {
            headers: request.headers
          }
        })
        response.cookies.set({
          name,
          value: "",
          ...options
        })
      }
    }
  })

  const {
    data: { user },
    error
  } = await supabase.auth.getUser()

  if (error?.name === "ConnectTimeoutError") {
    logout()
  }

  const url = new URL(request.url)

  if (user) {
    if (url.pathname === "/auth") {
      return NextResponse.redirect(new URL("/", request.url))
    }
    return response
  } else {
    if (PROTECTED_PATHS.includes(url.pathname)) {
      return NextResponse.redirect(new URL("/auth", request.url))
    }
    return response
  }
}
