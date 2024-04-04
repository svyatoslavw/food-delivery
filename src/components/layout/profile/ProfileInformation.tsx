"use client"

import { Address } from "@/components/layout/profile/Address"
import { Balance } from "@/components/layout/profile/Balance"
import React from "react"


const ProfileInformation = () => {
  // const { user, isLoading } = useProfile()
  //
  // if (isLoading)
  //   return (
  //     <div className="w-96 h-dvh flex justify-center items-center">
  //       <Loader2Icon size={28} className="animate-spin" />
  //     </div>
  //   )
  return (
    <>
      <Balance />
      <Address />
    </>
  )
}

export { ProfileInformation }
