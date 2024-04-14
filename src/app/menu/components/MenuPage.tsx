import { CategoryList } from "@/app/(site)/components/category/CategoryList"
import { ProductList } from "@/app/menu/components/ProductList"
import Header from "@/components/layout/header/Header"
import { ICategory, IProduct } from "@/types"


interface IMenuPage {
  categories: ICategory[]
  initialProducts: IProduct[]
  count: number
}

const MenuPage = ({ categories, initialProducts, count }: IMenuPage) => {
  return (
    <>
      <Header />
      <CategoryList categories={categories} />
      <ProductList initialProducts={initialProducts} count={count} />
    </>
  )
}

export { MenuPage }
