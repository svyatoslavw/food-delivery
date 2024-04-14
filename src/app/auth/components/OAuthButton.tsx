"use client"

import { loginWithOAuth } from "../actions"
import { useSearchParams } from "next/navigation"
import React from "react"

interface AuthButtonProps extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  text: string
  provider: "google" | "github"
}

const OAuthButton = React.forwardRef<HTMLButtonElement, AuthButtonProps>(({ children, text, provider }, ref) => {
  const params = useSearchParams()
  const next = params.get("next") || ""

  return (
    <button
      type="button"
      onClick={() => loginWithOAuth(next, provider)}
      ref={ref}
      className="flex w-full items-center justify-center gap-3 rounded-lg border bg-foreground px-3 py-2 font-medium text-background transition-colors hover:bg-foreground/80 dark:bg-background dark:text-foreground dark:hover:border-primary/50"
    >
      {children}
      <span className="capitalize">{text}</span>
    </button>
  )
})

export { OAuthButton }
