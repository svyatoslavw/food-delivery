import { createServerClient } from "@/lib/supabase/server"

const useLoadImage = (product: Product) => {
  const supabase = createServerClient()

  if (!product) {
    return null
  }

  const {
    data: { publicUrl }
  } = supabase.storage.from("images").getPublicUrl(product.image_url)
  return publicUrl
}

export { useLoadImage }
