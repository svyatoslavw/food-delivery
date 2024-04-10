import { Button } from "@/components/ui/button"
import { ICategory } from "@/types"
import Image from "next/image"


const CategoryItem = ({ item }: { item: ICategory }) => {
  return (
    <Button className="flex h-28 w-full cursor-pointer flex-col items-center justify-center border-2 hover:drop-shadow-md border-transparent gap-2 rounded-xl bg-secondary/30 dark:hover:bg-secondary hover:bg-zinc-100 p-2 text-neutral-500 dark:text-neutral-300 transition-all hover:border-red-600 shadow-sm">
      <Image draggable={false} src={item.image_url || "/menu.png"} width={50} height={50} alt="22" />
      <span>{item.title}</span>
    </Button>
  )
}

export { CategoryItem }
