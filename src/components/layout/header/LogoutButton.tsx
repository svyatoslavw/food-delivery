"use client"

import { logout } from "@/app/auth/actions"
import { useQueryClient } from "@tanstack/react-query"
import { LogOutIcon } from "lucide-react"

const LogoutButton = () => {
  const queryClient = useQueryClient()
  const handler = () => {
    logout()
    queryClient.clear()
  }

  return (
    <button onClick={handler} className="bg-red-600 p-1.5 text-white rounded hover:bg-red-500 transition ease-in-out">
      <LogOutIcon />
    </button>
  )
}
export { LogoutButton }
