import { PopularItem } from "./PopularItem"
import { Heading } from "@/components/ui/heading"
import type { IProduct } from "@/types"
import { ChevronRightIcon } from "lucide-react"


const PopularList = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="my-6">
      <Heading text="Popular Dishes">
        <span className="flex cursor-pointer items-center gap-2 text-red-600">
          <span className="hover:underline underline-offset-2">View all</span>
          <ChevronRightIcon className=" transition-transform hover:scale-150" size={16} />
        </span>
      </Heading>
      <div className="grid 2xl:grid-cols-3 sm:grid-cols-2 w-full gap-4 justify-between">
        {products.map((product: IProduct) => (
          <PopularItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export { PopularList }
