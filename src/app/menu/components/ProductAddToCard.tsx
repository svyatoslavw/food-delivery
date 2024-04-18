import type { IPopularItem } from "./ProductItem"
import { Button } from "@/components/ui/button"
import { PUBLIC_URL } from "@/lib/config/url.config"
import { TAddToCard, ordersAtom } from "@/store"
import type { IProduct } from "@/types"
import { useSetAtom } from "jotai/index"
import { PlusIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

const ProductAddToCard = ({ product, user }: IPopularItem) => {
  const { push } = useRouter()

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
    toast.success("Product successfully added to cart", { cancel: { label: "Close" } })
  }
  return (
    <Button
      onClick={user.id ? () => addToCart(product) : () => push(PUBLIC_URL.auth())}
      className={"bg-gradient-custom w-7 h-7 hover:rotate-90 hover:scale-125 p-0 hover:rounded-3xl transition-all duration-300"}
    >
      <PlusIcon size={16} />
    </Button>
  )
}

export { ProductAddToCard }
