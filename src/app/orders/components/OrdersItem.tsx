import { OrdersProductItem } from "./OrdersProductItem"
import { StepProgressBar } from "./StepProgressBar"
import { Button } from "@/components/ui/button"
import { convertCurrency } from "@/lib/utils"
import type { IOrder } from "@/types"

function formatDate(date: string) {
  const options: Intl.DateTimeFormatOptions = {
    minute: "numeric",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric"
  }

  return new Intl.DateTimeFormat("en-EN", options as Object).format(new Date(date))
}

const OrdersItem = ({ order }: { order: IOrder }) => {
  return (
    <div className="flex flex-col bg-background border px-3 py-6">
      <div className="w-full text-center font-semibold text-red-500 underline underline-offset-2">Order #{order.id}</div>
      <div className="w-full text-center text-sm text-foreground/60">{formatDate(order.created_at)}</div>
      <StepProgressBar status={order.status} />
      <div className="flex min-h-44 overflow-y-auto flex-col w-full border-t-2 border-b-2 py-2 my-2">
        {order.products.map((product) => (
          <OrdersProductItem product={product} key={product.price_id} />
        ))}
      </div>
      <div className="flex w-full font-semibold justify-end py-2">Total: {convertCurrency(order.total)}</div>
      <Button variant={"outline"}>See More...</Button>
    </div>
  )
}

export { OrdersItem }
