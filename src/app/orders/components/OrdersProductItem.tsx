import { convertCurrency } from "@/lib/utils"
import type { IStripeProduct } from "@/types"

const OrdersProductItem = ({ product }: { product: IStripeProduct }) => {
  return (
    <div className="flex w-full text-sm justify-between items-start p-1">
      <div className="flex flex-col">
        <div className="text-xs">{product.title}</div>
        <div>x{product.quantity}</div>
      </div>
      <div>{convertCurrency(product.price)}</div>
    </div>
  )
}

export { OrdersProductItem }
