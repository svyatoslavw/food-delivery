import { cn } from "@/lib/utils"
import type { IProduct } from "@/types"
import { HeartIcon } from "lucide-react"

const ProductItemHeader = ({ product }: { product: IProduct }) => {
  return (
    <div className={"flex justify-between w-full px-2 py-0.5"}>
      {product.discount ? <div className={"px-4 py-1 bg-red-500 text-white text-xs rounded-md"}>{product.discount}% OFF</div> : <div></div>}
      <HeartIcon
        size={18}
        className={cn(
          "dark:hover:fill-primary hover:fill-gray-500"
          //     , {
          //   ["fill-pink-600 text-pink-600 hover:fill-pink-700"]: product.isFavorite
          // }
        )}
      />
    </div>
  )
}

export { ProductItemHeader }
