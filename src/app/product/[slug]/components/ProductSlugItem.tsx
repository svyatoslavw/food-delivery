"use client"

import { CreateProductReview } from "./CreateProductReview"
import { ProductInformation } from "./ProductInformation"
import { AddToCardButton } from "./addToCardButton"
import { useLoadImage } from "@/hooks/useLoadImage"
import type { IProduct } from "@/types"
import Image from "next/image"

const ProductSlugItem = ({ product }: { product: IProduct }) => {
  const image = useLoadImage(product)

  return (
    <div className={"flex mx-auto h-auto w-[1100px] justify-start items-start gap-6 rounded-xl p-2 text-neutral-500 dark:text-neutral-300"}>
      <div className="w-full flex flex-col gap-4">
        <Image
          draggable={false}
          src={image ?? "/burger_default.png"}
          alt={product.title}
          width={550}
          height={550}
          className={"object-cover aspect-square p-3 bg-secondary/10 rounded-2xl"}
        />
        <AddToCardButton product={product} />
      </div>
      <div className={"py-10 flex flex-col w-full gap-2"}>
        <ProductInformation product={product} />
        <CreateProductReview />
      </div>
    </div>
  )
}

export { ProductSlugItem }
