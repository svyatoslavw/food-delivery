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
        "flex bg-secondary dark:bg-secondary/30 mx-auto h-auto w-full justify-center items-center gap-6 rounded-xl p-2 text-neutral-500 dark:text-neutral-300"
      }
    >
      <Image
        draggable={false}
        src={image ?? "/burger_default.png"}
        alt={product.title}
        width={300}
        height={300}
        className={"object-cover flex aspect-square p-3 bg-secondary/10 rounded-2xl"}
      />
      <div className={"w-[450px] flex flex-col gap-1"}>
        <div className={"text-4xl font-semibold"}>{product.title}</div>
        <div className={"text-xl"}>{convertCurrency(product.price)}</div>
        <Rating
          readonly
          initialValue={2}
          SVGstyle={{
            display: "inline-block"
          }}
          fillColor="gray"
          size={20}
          allowFraction
          transition
        />
        <div className={"text-sm"}>{product.description}</div>
      </div>
    </div>
  )
}

export { EditProductCard }
