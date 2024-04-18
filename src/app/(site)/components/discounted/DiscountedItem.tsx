"use client"

import { DiscountAddToCard } from "./DiscountAddToCard"
import { DiscountItemFooter } from "./DiscountItemFooter"
import { DiscountItemHeader } from "./DiscountItemHeader"
import { useLoadImage } from "@/hooks/useLoadImage"
import { PUBLIC_URL } from "@/lib/config/url.config"
import type { IProduct, IUser } from "@/types"
import Image from "next/image"
import Link from "next/link"

export interface IPopularItem {
  product: IProduct
  user: IUser
}

const DiscountedItem = ({ product, user }: IPopularItem) => {
  const image = useLoadImage(product)

  return (
    <div className="flex h-auto text-sm aspect-square object-cover w-full flex-col items-center justify-around gap-2 bg-secondary dark:bg-secondary/30 border-2 rounded-none p-2 text-neutral-500 dark:text-neutral-300 transition-all duration-200 hover:-translate-y-1 hover:border-b-red-400">
      <DiscountItemHeader product={product} />
      <Link href={PUBLIC_URL.product(product.slug)}>
        <Image draggable={false} src={image ?? "/burger_default.png"} width={200} height={200} alt={product.title} className="object-cover" />
      </Link>
      <div className="flex w-full justify-between items-center px-6">
        <DiscountItemFooter product={product} />
        <DiscountAddToCard product={product} user={user} />
      </div>
    </div>
  )
}

export { DiscountedItem }
