"use client"

import { Button } from "@/components/ui/button"
import { useLoadImage } from "@/hooks/useLoadImage"
import { convertCurrency } from "@/lib/utils"
import { TChngQualityProduct } from "@/store"
import type { ICartItem } from "@/types"
import Image from "next/image"


type OrderItemProps = {
  item: ICartItem
  addProduct: TChngQualityProduct
  removeProduct: TChngQualityProduct
}

const OrderItem = ({ item, addProduct, removeProduct }: OrderItemProps) => {
  const image = useLoadImage(item.product)

  return (
    <div className={"flex gap-2 items-center"}>
      <Image src={image ?? "/burger_default.png"} alt={item.product.title} className={"object-cover aspect-square flex"} width={70} height={70} />
      <div className={"flex flex-col w-full text-sm"}>
        <h4>
          {item.product.title} | {convertCurrency(item.product.price - (item.product.price * item.product.discount) / 100)}
        </h4>
        <div className={"flex w-full justify-between"}>
          <span className={"font-medium"}>x{item.quantity}</span>
          <div className="flex gap-1">
            <Button onClick={() => removeProduct(item)} className="w-6 h-6 p-0" variant={"outline"}>
              -
            </Button>
            <Button onClick={() => addProduct(item)} className="w-6 h-6 p-0" variant={"outline"}>
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { OrderItem }
