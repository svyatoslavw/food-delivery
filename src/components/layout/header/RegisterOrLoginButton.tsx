import { LogoutButton } from "@/components/layout/header/LogoutButton"
import { createServerClient } from "@/lib/supabase/server"
import { LogInIcon } from "lucide-react"
import Link from "next/link"


export default async function RegisterOrLoginButton() {
  const supabase = createServerClient()
  const { data } = await supabase.auth.getUser()
  if (data.user) {
    return (
      <div>
        <LogoutButton />
      </div>
    )
  }

  return (
    <div
      title={"Login"}
      className="bg-secondary/50 p-1.5 text-white rounded hover:bg-secondary/30 transition ease-in-out flex items-center justify-center"
    >
      <Link href="/auth">
        <LogInIcon color={"red"} />
      </Link>
    </div>
  )
}
