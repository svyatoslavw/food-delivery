import { OrdersItem } from "./OrdersItem"
import type { IOrder } from "@/types"

const OrdersList = ({ orders }: { orders: IOrder[] }) => {
  return (
    <div className="grid grid-cols-5 gap-4">
      {orders.map((order) => (
        <OrdersItem order={order} key={order.id} />
      ))}
    </div>
  )
}

export { OrdersList }
