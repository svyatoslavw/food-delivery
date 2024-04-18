import { PUBLIC_URL } from "@/lib/config/url.config"
import { convertCurrency } from "@/lib/utils"
import type { IProduct } from "@/types"
import Link from "next/link"
import { Rating } from "react-simple-star-rating"

const PopularitemInfo = ({ product }: { product: IProduct }) => {
  return (
    <div className={"py-6"}>
      <Link href={PUBLIC_URL.product(product.slug)} className={"text-base hover:underline"}>
        {product.title}
      </Link>
      <div className={"text-lg font-semibold"}>{convertCurrency(product.price)}</div>
      <Rating
        readonly
        initialValue={2}
        SVGstyle={{
          display: "inline-block"
        }}
        fillColor="red"
        size={12}
        allowFraction
        transition
      />
    </div>
  )
}

export { PopularitemInfo }
