"use client"

import { useFilter } from "@/app/menu/hooks/useFilter"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ICategory } from "@/types"
import Image from "next/image"


const CategoryItem = ({ item, isMain }: { item: ICategory; isMain: boolean }) => {
  const { queryParams, updateQueryParams } = useFilter(isMain)
  return (
    <Button
      onClick={() => updateQueryParams({ category: item.id, page: 1 })}
      className={cn(
        "flex h-24 w-full text-xs cursor-pointer flex-col items-center justify-center border-2 hover:drop-shadow-md border-transparent gap-2 rounded-xl bg-secondary dark:bg-secondary/50 hover:bg-primary/5 dark:hover:bg-primary/10 p-2 text-neutral-500 dark:text-neutral-300 transition-all hover:border-red-600 shadow-sm",
        {
          ["border-2 border-red-600"]: queryParams.category === item.id && !isMain
        }
      )}
    >
      <Image draggable={false} src={item.image_url || "/menu.png"} width={40} height={40} alt={item.id} />
      <span>{item.title}</span>
    </Button>
  )
}

export { CategoryItem }
