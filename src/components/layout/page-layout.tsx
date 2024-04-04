"use client"

import { Sidebar } from "@/components/layout/sidebar/Sidebar"
import { usePathname } from "next/navigation"
import React from "react"


const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  return (
    <main className="flex">
      {!pathname.includes("auth") && <Sidebar />}
      <div className="w-full dark:bg-foreground/[0.02] bg-foreground/10 px-10 ">{children}</div>
      {/*{!pathname.includes("auth") && <Profile />}*/}
    </main>
  )
}

export { PageLayout }
