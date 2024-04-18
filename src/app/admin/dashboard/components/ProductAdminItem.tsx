import { ProductAdminItemInfo } from "./ProductAdminItemInfo"
import { useLoadImage } from "@/hooks/useLoadImage"
import { PUBLIC_URL } from "@/lib/config/url.config"
import { IProduct } from "@/types"
import { SettingsIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const ProductAdminItem = ({ product }: { product: IProduct }) => {
  const image = useLoadImage(product)

  return (
    <div
      className={
        "flex relative h-auto w-full flex-col transition-all duration-200 hover:-translate-y-0.5 items-start justify-center gap-2 bg-secondary dark:bg-secondary/30 border-2 rounded-none p-2 text-neutral-500 dark:text-neutral-300 hover:border-b-red-400"
      }
    >
      <Link href={`/admin/dashboard/edit/${product.slug}`}>
        <SettingsIcon size={18} className={"absolute top-2 right-2 opacity-50 transition hover:animate-spin hover:opacity-100"} />
      </Link>
      <div className={"flex"}>
        <Link href={PUBLIC_URL.product(product.slug)} className={"object-cover cursor-default aspect-square flex"}>
          <Image draggable={false} src={image ?? "/burger_default.png"} alt={product.title} width={120} height={120} className={"object-cover"} />
        </Link>
        <ProductAdminItemInfo product={product} />
      </div>
      <div className={"line-clamp-2 text-xs"}>{product.description}</div>
    </div>
  )
}

export { ProductAdminItem }
