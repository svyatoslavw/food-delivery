import { createServerClient } from "@/lib/supabase/server"

const getProducts = async () => {
  const supabase = createServerClient()

  const { data, error } = await supabase.from("product").select("*").order("created_at", { ascending: false })

  if (error) {
    console.log(error.message)
  }

  return (data as any) || []
}

export { getProducts }
