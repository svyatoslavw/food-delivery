import CategoryItem from "./CategoryItem"
import { Heading } from "@/components/ui/heading"
import { categories } from "@/constants/categories.constant"
import { ChevronRightIcon } from "lucide-react"


const CategoryList = () => {
  return (
    <div className="my-6">
      <Heading text="Category">
        <span className="flex cursor-pointer items-center gap-2 text-red-600">
          <span className="hover:underline underline-offset-2">View all</span>
          <ChevronRightIcon className=" transition-transform hover:scale-150" size={16} />
        </span>
      </Heading>
      <div className="flex w-full gap-4 justify-between">
        {categories.map((item) => (
          <CategoryItem item={item} key={item.image} />
        ))}
      </div>
    </div>
  )
}

export { CategoryList }
