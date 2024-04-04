import { createServerClient } from "@/lib/supabase/server"

export const ProductService = {
  async getAll() {
    const supabase = createServerClient()

    const { data: products, error } = await supabase
      .from("product")
      .select("*")
      .order("created_at", { ascending: false })
      .filter("discount", "gt", 0)
      .range(0, 2)

    if (error) {
      console.log(error.message)
    }

    return (products as Product[]) || []
  }
}
