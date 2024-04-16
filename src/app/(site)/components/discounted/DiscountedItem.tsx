"use client"

import { Button } from "@/components/ui/button"
import { useLoadImage } from "@/hooks/useLoadImage"
import { PUBLIC_URL } from "@/lib/config/url.config"
import { cn, convertCurrency } from "@/lib/utils"
import { ordersAtom as popularOrdersAtom, TAddToCard } from "@/store"
import type { IProduct, IUser } from "@/types"
import { useSetAtom } from "jotai/index"
import { HeartIcon, PlusIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { toast } from "sonner"


interface IPopularItem {
  product: IProduct
  user: IUser
}

const DiscountedItem = ({ product, user }: IPopularItem) => {
  const image = useLoadImage(product)
  const { push } = useRouter()
  const total = product.price - (product.price * product.discount) / 100

  const setOrders = useSetAtom(popularOrdersAtom)

  const addToCart: TAddToCard = (item: IProduct) => {
    setOrders((prev) => {
      const existIndex = prev.findIndex((order) => order.product.title === item.title)
      if (existIndex !== -1) {
        return prev.map((order, index) =>
          index === existIndex
            ? {
                ...order,
                quantity: order.quantity + 1
              }
            : order
        )
      } else {
        return [
          ...prev,
          {
            id: prev.length,
            quantity: 1,
            product: { ...item }
          }
        ]
      }
    })
    toast.success("Product successfully added to cart")
  }
  return (
    <div className="flex h-auto text-sm aspect-square object-cover w-full flex-col items-center justify-around gap-2 bg-secondary dark:bg-secondary/30 border-4 rounded-lg p-2 text-neutral-500 dark:text-neutral-300 transition-all duration-200 border-transparent hover:-translate-y-2 hover:border-b-red-400">
      <div className={"flex justify-between w-full px-2 py-0.5"}>
        {product.discount ? <div className={"px-4 py-1 bg-red-500 text-white rounded-md"}>{product.discount}% OFF</div> : <div></div>}
        <HeartIcon
          className={cn(
            "dark:hover:fill-primary hover:fill-gray-500"
            //     , {
            //   ["fill-pink-600 text-pink-600 hover:fill-pink-700"]: product.isFavorite
            // }
          )}
        />
      </div>
      <Link href={PUBLIC_URL.product(product.slug)}>
        <Image draggable={false} src={image ?? "/burger_default.png"} width={200} height={200} alt={product.title} className="object-cover" />
      </Link>
      <div className="flex w-full justify-between items-center px-6">
        <div>
          <Link href={PUBLIC_URL.product(product.slug)} className={"text-base hover:underline"}>
            <h4>{product.title}</h4>
          </Link>
          <div className={"flex gap-2"}>
            <h6
              className={cn("text-lg font-semibold", {
                ["text-base line-through text-neutral-400"]: product.discount
              })}
            >
              {convertCurrency(product.price)}
            </h6>
            {product.discount !== 0 && <h6 className="text-lg font-semibold">{convertCurrency(+total.toFixed(2))}</h6>}
          </div>
        </div>

        <Button
          onClick={user.id ? () => addToCart(product) : () => push(PUBLIC_URL.auth())}
          className={"bg-gradient-custom w-7 h-7 hover:rotate-90 hover:scale-125 p-0 hover:rounded-3xl transition-all duration-300"}
        >
          <PlusIcon size={16} />
        </Button>
      </div>
    </div>
  )
}

export { DiscountedItem }
