"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { convertCurrency } from "@/lib/utils"
import type { IProduct } from "@/types"
import Image from "next/image"
import { Rating } from "react-simple-star-rating"

const ProductInfo = ({ product, image }: { product: IProduct; image: string }) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost">More...</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>Product information</DialogTitle>
            <DialogDescription>From the listed regions, select the one you are in.</DialogDescription>
          </DialogHeader>
          <div className={"flex h-auto w-full flex-col items-start justify-center gap-2 rounded-xl p-2 text-neutral-500 dark:text-neutral-300"}>
            <div className={"flex"}>
              <Image src={image ?? "/burger_default.png"} alt={product.title} width={300} height={300} className={"object-cover"} />
              <div className={"py-6 flex flex-col w-full gap-2"}>
                <div className={"text-xl"}>{product.title}</div>
                <div className={"text-lg font-semibold"}>{convertCurrency(product.price)}</div>
                <div className="flex gap-2 w-full items-center">
                  <Rating
                    initialValue={2}
                    SVGstyle={{
                      display: "inline-block"
                    }}
                    fillColor="red"
                    size={24}
                    allowFraction
                    transition
                  />
                </div>
                <div className={"w-full text-sm"}>{product.description}</div>
              </div>
            </div>
          </div>
          {/* <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="default">
                Save location
              </Button>
            </DialogClose>
          </DialogFooter> */}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export { ProductInfo }
