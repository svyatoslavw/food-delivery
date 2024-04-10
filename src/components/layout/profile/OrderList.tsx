"use client"

import { OrderItem } from "@/components/layout/profile/OrderItem"
import { Heading } from "@/components/ui/heading"
import { convertCurrency } from "@/lib/utils"
import { ordersAtom as orderListOrdersAtom, TChngQualityProduct } from "@/store"
import { a, useTransition } from "@react-spring/web"
import { useAtomValue, useSetAtom } from "jotai"
import { ChevronRightIcon } from "lucide-react"
import React from "react"


const OrderList = () => {
  const orders = useAtomValue(orderListOrdersAtom)
  const setOrders = useSetAtom(orderListOrdersAtom)

  const total = orders.reduce((acc, item) => acc + item.product.price * item.quantity, 0)

  const transitions = useTransition(orders, {
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: 80 },
    leave: { opacity: 0, height: 0 },
    delay: 50
  })

  const addProduct: TChngQualityProduct = (item) => {
    setOrders((prev) =>
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
      setOrders((prev) => prev.filter((order) => order.id !== item.id))
    } else {
      setOrders((prev) =>
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

  return (
    <div className="flex flex-col w-full">
      <Heading text={"Order Menu"}>
        <span className="flex cursor-pointer items-center gap-2 text-red-600">
          <span className="hover:underline underline-offset-2">View all</span>
          <ChevronRightIcon className=" transition-transform hover:scale-150" size={16} />
        </span>
      </Heading>
      <div>
        {orders.length ? (
          transitions((style, item) => (
            <a.div style={style}>
              <OrderItem item={item} addProduct={addProduct} removeProduct={removeProduct} key={item.id} />
            </a.div>
          ))
        ) : (
          <div className="flex w-full font-medium justify-center">Orders not found!</div>
        )}
      </div>
      {orders.length > 0 && (
        <div className={"w-full flex justify-between items-end"}>
          <h5>Total Amount: </h5>
          <h3 className={"text-xl font-medium underline underline-offset-2"}> {convertCurrency(total)}</h3>
        </div>
      )}
    </div>
  )
}

export { OrderList }
