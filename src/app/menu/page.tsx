import { CategoryList } from "@/app/(site)/components/category/CategoryList"
import { CategoryService } from "@/lib/api/category.service"


export default async function Menu() {
  const categories = await CategoryService.getAll()
  return (
    <div>
      <CategoryList categories={categories} />
    </div>
  )
}
