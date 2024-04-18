import { CategoryList } from "@/app/(site)/components/category/CategoryList"
import { ProductList } from "@/app/menu/components/ProductList"
import Header from "@/components/layout/header/Header"
import { UserService } from "@/lib/api/user.service"
import { ICategory, IProduct } from "@/types"

interface IMenuPage {
  categories: ICategory[]
  initialProducts: IProduct[]
  count: number
}

const MenuPage = async ({ categories, initialProducts, count }: IMenuPage) => {
  const user = await UserService.getProfile("server")
  return (
    <section>
      <Header />
      <CategoryList categories={categories} />
      <ProductList initialProducts={initialProducts} count={count} user={user} />
    </section>
  )
}

export { MenuPage }
