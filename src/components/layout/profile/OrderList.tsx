"use client"

import { OrderItem } from "@/components/layout/profile/OrderItem"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { checkout } from "@/lib/stripe/actions"
import { convertCurrency } from "@/lib/utils"
import { ordersAtom as orderListOrdersAtom, TChngQualityProduct } from "@/store"
import { IUser } from "@/types"
import { loadStripe } from "@stripe/stripe-js"
import { useAtomValue, useSetAtom } from "jotai"
import { LoaderIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import React from "react";


const OrderList = ({ user }: { user: IUser }) => {
  const items = useAtomValue(orderListOrdersAtom)
  const setItems = useSetAtom(orderListOrdersAtom)
  const [isLoading, setIsLoading] = React.useState(false)
  const total = items.reduce((acc, item) => acc + (item.product.price - (item.product.price * item.product.discount) / 100) * item.quantity, 0)
  const { push } = useRouter()
  const addProduct: TChngQualityProduct = (item) => {
    setItems((prev) =>
      prev.map((order) =>
        order.id === item.id
          ? {
              ...order,
              quantity: order.quantity + 1
            }
          : order
      )
    )
  }

  const removeProduct: TChngQualityProduct = (item) => {
    if (item.quantity === 1) {
      setItems((prev) => prev.filter((order) => order.id !== item.id))
    } else {
      setItems((prev) =>
        prev.map((order) =>
          order.id === item.id
            ? {
                ...order,
                quantity: order.quantity - 1
              }
            : order
        )
      )
    }
  }
  const onPayOrder = async () => {
    if (user.id) {
      setIsLoading(true)
      const data = JSON.parse(await checkout(user.email, items))
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
      const res = await stripe?.redirectToCheckout({
        sessionId: data.id
      })
      if (res?.error) {
        alert("Fail to checkout")
      }
      setIsLoading(false)
    } else {
      push("/auth")
    }
  }

  return (
    <div className="flex flex-col w-full">
      <Heading text={"Order Menu"} className={"text-base"} />
      <div className={"max-h-[320px] overflow-y-auto"}>
        {items.length ? (
          items.map((item) => <OrderItem item={item} addProduct={addProduct} removeProduct={removeProduct} key={item.id} />)
        ) : (
          <div className="flex w-full font-medium justify-center">Orders not found!</div>
        )}
      </div>
      {items.length > 0 && (
        <>
          <div className={"w-full text-sm flex justify-between items-end"}>
            <h5>Total Amount: </h5>
            <h3 className={"text-lg font-medium underline underline-offset-2"}> {convertCurrency(total)}</h3>
          </div>
          <Button onClick={onPayOrder} className={"mt-5"}>
            {isLoading && <LoaderIcon size={16} className={"animate-spin mr-1"} />}
            Pay
          </Button>
        </>
      )}
    </div>
  )
}

export { OrderList }
