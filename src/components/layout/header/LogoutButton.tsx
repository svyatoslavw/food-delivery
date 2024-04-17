"use client"

import { logout } from "@/app/auth/actions"
import { LogOutIcon } from "lucide-react"

const LogoutButton = () => {
  const handler = () => {
    logout()
  }

  return (
    <button onClick={handler} className="bg-red-600 p-1.5 text-white rounded hover:bg-red-500 transition ease-in-out">
      <LogOutIcon />
    </button>
  )
}
export { LogoutButton }
