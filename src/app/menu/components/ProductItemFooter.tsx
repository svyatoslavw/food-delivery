import { PUBLIC_URL } from "@/lib/config/url.config"
import { cn, convertCurrency } from "@/lib/utils"
import type { IProduct } from "@/types"
import Link from "next/link"

const ProductItemFooter = ({ product }: { product: IProduct }) => {
  const total = product.price - (product.price * product.discount) / 100

  return (
    <div>
      <Link href={PUBLIC_URL.product(product.slug)} className={"text-base hover:underline"}>
        <h4>{product.title}</h4>
      </Link>
      <div className={"flex gap-2"}>
        <h6
          className={cn("text-lg font-semibold", {
            ["text-base line-through text-neutral-400"]: product.discount
          })}
        >
          {convertCurrency(product.price)}
        </h6>
        {product.discount !== 0 && <h6 className="text-lg font-semibold">{convertCurrency(+total.toFixed(2))}</h6>}
      </div>
    </div>
  )
}

export { ProductItemFooter }
