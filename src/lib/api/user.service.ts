import { createClient } from "@/lib/supabase/client"
import { createServerClient } from "@/lib/supabase/server"
import { IUser } from "@/types"

const initUser: IUser = {
  id: "",
  created_at: "",
  email: "",
  role: ""
}

export const UserService = {
  async getProfile(type: "client" | "server") {
    const supabase = type === "server" ? createServerClient() : createClient()
    const { data } = await supabase.auth.getUser()
    if (data.user) {
      const { data: user, error } = await supabase.from("user").select("*").eq("id", data.user.id).single()

      if (!error) return user as IUser
    }
    return initUser as IUser
  }
}
