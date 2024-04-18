import { createClient } from "@/lib/supabase/client"
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
      .order("discount", { ascending: false })
      .filter("discount", "gt", 0)
      .range(0, 4)

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
  async getAllWithFilters(searchParams: { [key: string]: string | string[] | undefined }) {
    const page = searchParams["page"] ?? "1"
    const per_page = "10"
    const supabase = createServerClient()

    const { data: products, error } = await supabase
      .from("product")
      .select("*")
      .order("created_at", { ascending: false })
      .range((+page - 1) * +per_page, +page * +per_page - 1)

    if (error) {
      console.log(error.message)
    }

    return (products as IProduct[]) || []
  },
  async getCountAllProducts() {
    const supabase = createServerClient()
    const { count, error } = await supabase.from("product").select("count", { count: "exact" })
    if (error) {
      return 0
    } else {
      return count
    }
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
    const per_page = "10"
    const category = searchParams["category"]
    const searchTerm = searchParams["searchTerm"] ?? undefined

    const supabase = createServerClient()
    const query = supabase.from("product").select("*")

    if (category) {
      query.eq("category_id", category)
    }

    const { data, error } = await query
      .range((+page - 1) * +per_page, +page * +per_page - 1)
      .ilike("title", `%${searchTerm ?? ""}%`)
      .order("discount", { ascending: false })

    if (error) {
      return []
    } else {
      return data as IProduct[]
    }
  },
  async getCountCategoryProducts(searchParams: { [key: string]: string | string[] | undefined }) {
    const supabase = createServerClient()

    const category = searchParams["category"]
    const searchTerm = searchParams["searchTerm"] ?? undefined

    const query = supabase
      .from("product")
      .select("count", { count: "exact" })
      .ilike("title", `%${searchTerm ?? ""}%`)

    if (category) {
      query.eq("category_id", category)
    }

    const { count, error } = await query

    if (error) {
      return 0
    } else {
      return count
    }
  }
}
