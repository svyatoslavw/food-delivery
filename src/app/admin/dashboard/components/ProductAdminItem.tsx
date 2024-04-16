import { useLoadImage } from "@/hooks/useLoadImage"
import { PUBLIC_URL } from "@/lib/config/url.config"
import { convertCurrency } from "@/lib/utils"
import { IProduct } from "@/types"
import { SettingsIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Rating } from "react-simple-star-rating"


const ProductAdminItem = ({ product }: { product: IProduct }) => {
  const image = useLoadImage(product)

  return (
    <div
      className={
        "flex relative h-auto w-full flex-col transition-all duration-200 hover:-translate-y-1 items-start justify-center gap-2 bg-secondary/30 border-2 rounded-xl p-2 text-neutral-500 dark:text-neutral-300 hover:border-red-400"
      }
    >
      <Link href={`/admin/dashboard/edit/${product.slug}`}>
        <SettingsIcon size={18} className={"absolute top-2 right-2 opacity-50 transition hover:animate-spin hover:opacity-100"} />
      </Link>
      <div className={"flex"}>
        <Link href={PUBLIC_URL.product(product.slug)} className={"object-cover aspect-square flex"}>
          <Image src={image ?? "/burger_default.png"} alt={product.title} width={120} height={120} className={"object-cover"} />
        </Link>
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
      </div>
      <div className={"line-clamp-2 text-xs"}>{product.description}</div>
    </div>
  )
}

export default ProductAdminItem
