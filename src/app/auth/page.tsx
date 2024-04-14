import { AuthForm } from "./components/AuthForm"
import React from "react"

export default async function Auth() {
  return (
    <React.Suspense>
      <AuthForm />
    </React.Suspense>
  )
}
