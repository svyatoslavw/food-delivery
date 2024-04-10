import { CategoryItem } from "./CategoryItem"
import { Heading } from "@/components/ui/heading"
import { ICategory } from "@/types"


interface ICategoryList {
  categories: ICategory[]
  isMain?: boolean
  href?: string
}

const CategoryList = ({ categories, isMain = false, href = "" }: ICategoryList) => {
  return (
    <div className="my-6">
      <Heading text="Category" href={href} isLink={isMain} />
      <div className="flex w-full gap-4 justify-between">
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export { CategoryList }
