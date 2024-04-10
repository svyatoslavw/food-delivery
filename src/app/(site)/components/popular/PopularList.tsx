"use client"

import { PopularItem } from "@/app/(site)/components/popular/PopularItem"
import { Heading } from "@/components/ui/heading"
import type { IProduct } from "@/types"
import React from "react"


const PopularList = ({ products }: { products: IProduct[] }) => {
  return (
    <div className={"my-6"}>
      <Heading text={"Popular This Week"} href={"/menu"} isLink={true} />
      <div className={"grid grid-cols-4 gap-6"}>
        {products.map((product) => (
          <PopularItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export { PopularList }
