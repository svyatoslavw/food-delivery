import { OrdersList } from "./OrdersList"
import Header from "@/components/layout/header/Header"
import { IOrder } from "@/types"

const OrdersPage = ({ orders }: { orders: IOrder[] }) => {
  return (
    <>
      <Header />
      <OrdersList orders={orders} />
    </>
  )
}

export { OrdersPage }
