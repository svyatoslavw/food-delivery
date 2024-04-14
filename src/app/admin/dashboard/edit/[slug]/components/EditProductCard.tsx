import { useLoadImage } from "@/hooks/useLoadImage"
import { convertCurrency } from "@/lib/utils"
import type { IProduct } from "@/types"
import Image from "next/image"
import { Rating } from "react-simple-star-rating"


const EditProductCard = ({ product }: { product: IProduct }) => {
  const image = useLoadImage(product)
  return (
    <div
      className={
        "flex bg-secondary dark:bg-secondary/30 mx-auto h-auto w-[900px] justify-center items-center gap-6 rounded-xl p-2 text-neutral-500 dark:text-neutral-300"
      }
    >
      <Image
        draggable={false}
        src={image ?? "/burger_default.png"}
        alt={product.title}
        width={350}
        height={350}
        className={"object-cover aspect-square p-3 bg-secondary/10 rounded-2xl"}
      />
      <div className={"py-10 flex flex-col w-full gap-2"}>
        <>
          <div className={"text-5xl font-semibold"}>{product.title}</div>
          <div className={"text-2xl"}>{convertCurrency(product.price)}</div>
          <Rating
            readonly
            initialValue={2}
            SVGstyle={{
              display: "inline-block"
            }}
            fillColor="gray"
            size={24}
            allowFraction
            transition
          />
          <div className={"w-full mb-6"}>{product.description}</div>
        </>
      </div>
    </div>
  )
}

export { EditProductCard }
