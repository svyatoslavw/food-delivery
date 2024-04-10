import { convertCurrency } from "@/lib/utils"
import type { IProduct } from "@/types"
import { Rating } from "react-simple-star-rating"

const ProductInformation = ({ product }: { product: IProduct }) => {
  return (
    <>
      <div className={"text-5xl font-semibold"}>{product.title}</div>
      <div className={"text-2xl"}>{convertCurrency(product.price)}</div>
      <Rating
        readonly
        initialValue={2}
        SVGstyle={{
          display: "inline-block"
        }}
        fillColor="gray"
        size={24}
        allowFraction
        transition
      />
      <div className={"w-full mb-6"}>{product.description}</div>
    </>
  )
}

export { ProductInformation }
