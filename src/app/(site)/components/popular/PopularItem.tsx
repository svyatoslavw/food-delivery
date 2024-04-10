import { useLoadImage } from "@/hooks/useLoadImage"
import { convertCurrency } from "@/lib/utils"
import type { IProduct } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { Rating } from "react-simple-star-rating"

const PopularItem = ({ product }: { product: IProduct }) => {
  const image = useLoadImage(product)

  return (
    <div
      className={
        "flex h-auto w-full flex-col transition-all duration-200 hover:-translate-y-1 items-start justify-center gap-2 bg-secondary/30 border-2 rounded-xl p-2 text-neutral-500 dark:text-neutral-300 border-transparent hover:border-red-400"
      }
    >
      <div className={"flex"}>
        <Link href={`/product/${product.slug}`}>
          <Image src={image ?? "/burger_default.png"} alt={product.title} width={130} height={130} className={"object-cover"} />
        </Link>
        <div className={"py-6"}>
          <Link href={`/product/${product.slug}`} className={"text-xl hover:underline"}>
            {product.title}
          </Link>
          <div className={"text-lg font-semibold"}>{convertCurrency(product.price)}</div>
          <div className="flex gap-2 w-full items-center">
            <Rating
              readonly
              initialValue={2}
              SVGstyle={{
                display: "inline-block"
              }}
              fillColor="red"
              size={18}
              allowFraction
              transition
            />
            {/* <ProductInfo product={product} image={image ?? ""} /> */}
          </div>
        </div>
      </div>
      <div className={"line-clamp-2 text-sm"}>{product.description}</div>
    </div>
  )
}

export { PopularItem }
