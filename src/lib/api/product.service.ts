import { createServerClient } from "@/lib/supabase/server"
import { IProduct } from "@/types"


export const ProductService = {
  async getPopular() {
    const supabase = createServerClient()

    const { data: products, error } = await supabase.from("product").select("*").order("created_at", { ascending: false }).range(0, 3)

    if (error) {
      console.log(error.message)
    }

    return (products as IProduct[]) || []
  },
  async getDiscounted() {
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

    return (products as IProduct[]) || []
  }
}
