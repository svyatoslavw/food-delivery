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
        "flex h-28 w-full cursor-pointer flex-col items-center justify-center border-2 hover:drop-shadow-md border-transparent gap-2 rounded-xl bg-secondary/30 dark:hover:bg-secondary hover:bg-zinc-100 p-2 text-neutral-500 dark:text-neutral-300 transition-all hover:border-red-600 shadow-sm",
        {
          ["border-2 border-red-600"]: queryParams.category === item.id && !isMain
        }
      )}
    >
      <Image draggable={false} src={item.image_url || "/menu.png"} width={50} height={50} alt="22" />
      <span>{item.title}</span>
    </Button>
  )
}

export { CategoryItem }
