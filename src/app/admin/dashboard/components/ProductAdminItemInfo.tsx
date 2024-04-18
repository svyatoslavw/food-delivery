import { PUBLIC_URL } from "@/lib/config/url.config"
import { convertCurrency } from "@/lib/utils"
import { IProduct } from "@/types"
import Link from "next/link"
import { Rating } from "react-simple-star-rating"

const ProductAdminItemInfo = ({ product }: { product: IProduct }) => {
  return (
    <div className={"py-6"}>
      <Link href={PUBLIC_URL.product(product.slug)} className={"hover:underline text-sm line-clamp-1"}>
        {product.title}
      </Link>
      <div className={"text-base font-semibold"}>{convertCurrency(product.price)}</div>
      <Rating
        readonly
        initialValue={2}
        SVGstyle={{
          display: "inline-block"
        }}
        fillColor="red"
        size={12}
        allowFraction
      />
    </div>
  )
}

export { ProductAdminItemInfo }
