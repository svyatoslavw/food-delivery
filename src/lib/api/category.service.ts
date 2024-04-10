import { createServerClient } from "@/lib/supabase/server"
import { ICategory } from "@/types"


export const CategoryService = {
  async getMain() {
    const supabase = createServerClient()

    const { data: categories, error } = await supabase
      .from("category")
      .select("*")
      //.order("created_at", { ascending: false })
      .range(0, 5)

    if (error) {
      console.log(error.message)
    }

    return (categories as ICategory[]) || []
  },

  async getAll() {
    const supabase = createServerClient()

    const { data: categories, error } = await supabase.from("category").select("*").order("created_at", { ascending: true })

    if (error) {
      console.log(error.message)
    }

    return (categories as ICategory[]) || []
  }
}
