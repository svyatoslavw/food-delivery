import { useLoadImage } from "@/hooks/useLoadImage"
import { PUBLIC_URL } from "@/lib/config/url.config"
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
        "flex h-auto w-full flex-col transition-all duration-200 hover:-translate-y-1 items-start justify-center gap-0.5 bg-secondary dark:bg-secondary/30 border-2 rounded-xl p-2 text-neutral-500 dark:text-neutral-300 border-transparent hover:border-red-400"
      }
    >
      <div className={"flex"}>
        <Link href={PUBLIC_URL.product(product.slug)} className={"object-cover aspect-square flex"}>
          <Image src={image ?? "/burger_default.png"} alt={product.title} width={100} height={100} className={"object-cover flex"} />
        </Link>
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
      </div>
      <div className={"line-clamp-2 text-xs"}>{product.description}</div>
    </div>
  )
}

export { PopularItem }
