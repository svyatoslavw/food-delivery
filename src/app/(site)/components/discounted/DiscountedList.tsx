import { DiscountedItem } from "./DiscountedItem"
import { Heading } from "@/components/ui/heading"
import { UserService } from "@/lib/api/user.service"
import type { IProduct } from "@/types"

const DiscountedList = async ({ products }: { products: IProduct[] }) => {
  const user = await UserService.getProfile("server")

  return (
    <div className="my-6">
      <Heading text="Discount Dishes" href={"/menu"} isLink={true} />
      <div className="grid 2xl:grid-cols-5 sm:grid-cols-4 w-full gap-4 justify-between">
        {products.map((product: IProduct) => (
          <DiscountedItem user={user!} product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export { DiscountedList }
