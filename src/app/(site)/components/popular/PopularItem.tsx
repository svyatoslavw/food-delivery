import { PopularitemInfo } from "./PopularitemInfo"
import { useLoadImage } from "@/hooks/useLoadImage"
import { PUBLIC_URL } from "@/lib/config/url.config"
import type { IProduct } from "@/types"
import Image from "next/image"
import Link from "next/link"

const PopularItem = ({ product }: { product: IProduct }) => {
  const image = useLoadImage(product)

  return (
    <div className="flex h-auto w-full flex-col transition-all duration-200 items-start justify-center gap-0.5 bg-secondary dark:bg-secondary/30 border rounded-none p-2 text-neutral-500 dark:text-neutral-300 hover:bg-primary/5 dark:hover:bg-primary/10">
      <div className="flex">
        <Link href={PUBLIC_URL.product(product.slug)} className={"object-cover cursor-default aspect-square flex"}>
          <Image src={image ?? "/burger_default.png"} alt={product.title} width={100} height={100} draggable={false} className="object-cover flex" />
        </Link>
        <PopularitemInfo product={product} />
      </div>
      <div className="line-clamp-2 text-xs">{product.description}</div>
    </div>
  )
}

export { PopularItem }
