"use client"

import { useFilter } from "@/app/menu/hooks/useFilter"
import { Button } from "@/components/ui/button"
import { useLoadImage } from "@/hooks/useLoadImage"
import { cn } from "@/lib/utils"
import { ICategory } from "@/types"
import Image from "next/image"

const CategoryItem = ({ item, isMain }: { item: ICategory; isMain: boolean }) => {
  const { updateQueryParams } = useFilter(isMain)
  const image = useLoadImage(item)
  return (
    <Button
      onClick={() => updateQueryParams({ category: item.id, page: 1, searchTerm: "" })}
      className={cn(
        "flex h-24 w-full text-xs cursor-pointer flex-col items-center justify-center border gap-2 rounded-none bg-secondary dark:bg-secondary/50 hover:bg-primary/5 dark:hover:bg-primary/10 p-2 text-neutral-500 dark:text-neutral-300 transition-all shadow-sm"
      )}
    >
      <Image draggable={false} src={image ?? "/menu.png"} width={40} height={40} alt={item.id} />
      <span>{item.title}</span>
    </Button>
  )
}

export { CategoryItem }
