import { CategoryAdminList } from "@/app/admin/dashboard/components/CategoryAdminList"
import { ProductAdminList } from "@/app/admin/dashboard/components/ProductAdminList"
import { ICategory, IProduct } from "@/types"


interface IDashboardPage {
  categories: ICategory[]
  products: IProduct[]
  count: number
}

const DashboardPage = ({ categories, products, count }: IDashboardPage) => {
  return (
    <section>
      <CategoryAdminList categories={categories} />
      <ProductAdminList products={products} count={count} />
    </section>
  )
}

export { DashboardPage }
