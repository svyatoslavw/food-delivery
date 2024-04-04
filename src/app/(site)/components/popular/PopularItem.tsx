import { Button } from "@/components/ui/button"
import { useLoadImage } from "@/hooks/useLoadImage"
import { cn, convertCurrency } from "@/lib/utils"
import type { IProduct } from "@/types"
import { HeartIcon } from "lucide-react"
import Image from "next/image"


const PopularItem = ({ product }: { product: IProduct }) => {
  const image = useLoadImage(product)
  const total = product.price - (product.price * product.discount) / 100
  return (
    <div className="flex h-auto aspect-square object-cover w-full flex-col items-center justify-around gap-2 bg-secondary/30 border-4 rounded-lg p-2 text-neutral-500 dark:text-neutral-300 transition-all duration-200 border-transparent hover:-translate-y-2 hover:border-b-red-400">
      <div className={"flex justify-between w-full px-2 py-0.5"}>
        {product.discount ? <div className={"px-4 py-1 bg-red-500 text-white rounded-md"}>{product.discount}% OFF</div> : <div></div>}
        <HeartIcon
          className={cn(
            "hover:fill-primary"
            //     , {
            //   ["fill-pink-600 text-pink-600 hover:fill-pink-700"]: product.isFavorite
            // }
          )}
        />
      </div>
      <Image draggable={false} src={image ?? "/burger_default.png"} width={280} height={280} alt={product.title} />
      <div className="flex w-full justify-between px-6">
        <div>
          <h4 className="text-lg">{product.title}</h4>
          <div className={"flex gap-2"}>
            <h6
              className={cn("text-2xl font-bold", {
                ["text-lg line-through text-neutral-400"]: product.discount
              })}
            >
              {convertCurrency(product.price)}
            </h6>
            {product.discount !== 0 && <h6 className="text-2xl font-bold">{convertCurrency(+total.toFixed(2))}</h6>}
          </div>
        </div>
        <Button className={"bg-gradient-custom hover:rotate-90 hover:rounded-3xl transition-all duration-300"}>+</Button>
      </div>
    </div>
  )
}

export { PopularItem }
