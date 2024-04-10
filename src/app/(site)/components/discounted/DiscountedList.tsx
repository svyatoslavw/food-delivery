"use client"

import { DiscountedItem } from "./DiscountedItem"
import { Heading } from "@/components/ui/heading"
import { TAddToCard, ordersAtom as popularOrdersAtom } from "@/store"
import type { IProduct } from "@/types"
import { useSetAtom } from "jotai/index"
import { toast } from "sonner"

const DiscountedList = ({ products }: { products: IProduct[] }) => {
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
    <div className="my-6">
      <Heading text="Discount Dishes" href={"/menu"} isLink={true} />
      <div className="grid 2xl:grid-cols-3 sm:grid-cols-2 w-full gap-4 justify-between">
        {products.map((product: IProduct) => (
          <DiscountedItem product={product} addToCart={addToCart} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export { DiscountedList }
