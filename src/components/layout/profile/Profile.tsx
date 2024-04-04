import { Address } from "@/components/layout/profile/Address"
import { Balance } from "@/components/layout/profile/Balance"
import { useProfile } from "@/hooks/useProfile"
import { Loader2Icon } from "lucide-react"
import React from "react"


const Profile = () => {
  const { user, isLoading } = useProfile()

  if (isLoading)
    return (
      <div className="w-96 h-dvh flex justify-center items-center">
        <Loader2Icon size={28} className="animate-spin" />
      </div>
    )
  return (
    <div className="flex w-96 p-4 flex-col gap-5 text-neutral-500 dark:text-neutral-300">
      <Balance />
      <Address />
    </div>
  )
}

export { Profile }
