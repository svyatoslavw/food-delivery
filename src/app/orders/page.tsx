import { createServerClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"


export default async function Orders() {
  const supabase = createServerClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/")
  }

  return <div>Orders {data.user.email}</div>
}
