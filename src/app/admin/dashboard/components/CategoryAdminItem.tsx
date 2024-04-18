import { Button } from "@/components/ui/button"
import { useLoadImage } from "@/hooks/useLoadImage"
import { ICategory } from "@/types"
import { SquarePenIcon } from "lucide-react"
import Image from "next/image"

const CategoryAdminItem = ({ item }: { item: ICategory }) => {
  const image = useLoadImage(item)
  return (
    <Button
      className={
        "flex h-24 text-xs relative w-full flex-col items-center border justify-center gap-2 rounded-none cursor-default bg-secondary dark:bg-secondary/50 hover:bg-primary/5 dark:hover:bg-primary/10 p-2 text-neutral-500 dark:text-neutral-300 transition-all"
      }
    >
      <SquarePenIcon size={16} className={"absolute right-2 top-2 cursor-pointer opacity-50 transition hover:opacity-100"} />
      <Image priority draggable={false} src={image || "/menu.png"} width={40} height={40} alt="22" />
      <span>{item.title}</span>
    </Button>
  )
}

export { CategoryAdminItem }
