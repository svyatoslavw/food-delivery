import { createClient } from "@/lib/supabase/client"
import type { IProduct } from "@/types"


const useLoadImage = (product: IProduct) => {
  const supabase = createClient()

  if (!product) {
    return null
  }

  const {
    data: { publicUrl }
  } = supabase.storage.from("images").getPublicUrl(product.image_url)
  return publicUrl
}

export { useLoadImage }
