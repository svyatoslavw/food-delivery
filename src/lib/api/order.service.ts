import { createServerClient } from "../supabase/server"
import { IOrder } from "@/types"

export const OrderService = {
  async getAll(userId: string) {
    const supabase = createServerClient()

    const { data: orders, error } = await supabase.from("order").select("*").eq("user_id", userId)

    if (error) {
      console.log(error.message)
    }
    return orders as IOrder[]
  }
}
