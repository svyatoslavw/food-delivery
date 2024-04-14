import { DiscountedItem } from "./DiscountedItem"
import { Heading } from "@/components/ui/heading"
import type { IProduct } from "@/types"


const DiscountedList = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="my-6">
      <Heading text="Discount Dishes" href={"/menu"} isLink={true} />
      <div className="grid 2xl:grid-cols-3 sm:grid-cols-2 w-full gap-4 justify-between">
        {products.map((product: IProduct) => (
          <DiscountedItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export { DiscountedList }
