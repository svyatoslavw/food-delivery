import { AdminHeader } from "@/app/admin/dashboard/components/AdminHeader"
import React from "react"

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <AdminHeader />
      {children}
    </main>
  )
}
