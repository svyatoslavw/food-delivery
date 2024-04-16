import { CategoryAdminItem } from "@/app/admin/dashboard/components/CategoryAdminItem"
import { Heading } from "@/components/ui/heading"
import { ICategory } from "@/types"
import React from "react"


const CategoryAdminList = ({ categories }: { categories: ICategory[] }) => {
  return (
    <div className={"my-6"}>
      <Heading text={"All categories"} />
      <div className={"grid grid-cols-8 gap-3"}>
        {categories.map((category) => (
          <CategoryAdminItem item={category} key={category.id} />
        ))}
      </div>
    </div>
  )
}

export { CategoryAdminList }
