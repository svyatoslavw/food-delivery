import { createClient } from "../supabase/client"
import { createServerClient } from "@/lib/supabase/server"
import type { IProduct } from "@/types"


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
  },
  async getAll() {
    const supabase = createClient()

    const { data: products, error } = await supabase.from("product").select("*").order("created_at", { ascending: false })

    if (error) {
      console.log(error.message)
    }

    return (products as IProduct[]) || []
  },
  async getBySlug(slug: string) {
    const supabase = createServerClient()

    const { data: product, error } = await supabase.from("product").select("*").eq("slug", slug).single()

    if (error) {
      console.log(error.message)
    }

    return (product as IProduct) || {}
  },
  async getByCategory(searchParams: { [key: string]: string | string[] | undefined }) {
    const page = searchParams["page"] ?? "1"
    const per_page = "4"

    const supabase = createServerClient()
    const { data, error } = await supabase
      .from("product")
      .select("*")
      .eq("category_id", searchParams["category"])
      .range((+page - 1) * +per_page, +page * +per_page - 1)
    if (error) return []
    return data as IProduct[]
  },
  async getCountCategoryProducts(searchParams: { [key: string]: string | string[] | undefined }) {
    const supabase = createServerClient()
    const { count, error } = await supabase.from("product").select("count", { count: "exact" }).eq("category_id", searchParams["category"])
    if (error) {
      return 0
    } else {
      return count
    }
  }
}
