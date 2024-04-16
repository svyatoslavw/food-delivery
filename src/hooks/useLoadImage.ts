import { createClient } from "@/lib/supabase/client"
import type { ICategory, IProduct } from "@/types"


const useLoadImage = (item: IProduct | ICategory) => {
  const supabase = createClient()

  if (!item) {
    return null
  }

  if ((item as IProduct).price !== undefined) {
    const {
      data: { publicUrl }
    } = supabase.storage.from("images").getPublicUrl(item.image_url)
    return publicUrl
  } else {
    const {
      data: { publicUrl }
    } = supabase.storage.from("categories").getPublicUrl(item.image_url)
    return publicUrl
  }
}

export { useLoadImage }
