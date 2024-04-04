import { createClient } from "@/lib/supabase/client"

const initUser = {
  created_at: null,
  role: null,
  id: null
}

export const UserService = {
  async getProfile() {
    const supabase = createClient()
    const { data } = await supabase.auth.getSession()
    if (data.session?.user) {
      const { data: user, error } = await supabase
        .from("user")
        .select("*")
        .eq("id", data.session.user.id)
        .single()

      if (!error) return user
    }
    return initUser
  }
}
