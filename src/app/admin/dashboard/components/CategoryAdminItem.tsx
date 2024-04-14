import { Button } from "@/components/ui/button"
import { ICategory } from "@/types"
import { SquarePenIcon } from "lucide-react"
import Image from "next/image"


const CategoryAdminItem = ({ item }: { item: ICategory }) => {
  return (
    <Button
      className={
        "flex h-24 text-xs relative w-full flex-col items-center justify-center border-2 gap-2 rounded-xl cursor-default bg-secondary dark:bg-secondary/50 hover:bg-primary/10 dark:hover:bg-primary/10 p-2 text-neutral-500 dark:text-neutral-300 transition-all"
      }
    >
      <SquarePenIcon size={18} className={"absolute right-2 top-2 cursor-pointer opacity-50 transition hover:opacity-100"} />
      <Image draggable={false} src={item.image_url || "/menu.png"} width={40} height={40} alt="22" />
      <span>{item.title}</span>
    </Button>
  )
}

export { CategoryAdminItem }
