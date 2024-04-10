import { Button } from "@/components/ui/button"
import { TAddToCard, ordersAtom } from "@/store"
import { IProduct } from "@/types"
import { useSetAtom } from "jotai"
import { toast } from "sonner"

const AddToCardButton = ({ product }: { product: IProduct }) => {
  const setOrders = useSetAtom(ordersAtom)

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
    <Button className="py-6" onClick={() => addToCart(product)}>
      Add To Cart
    </Button>
  )
}

export { AddToCardButton }
