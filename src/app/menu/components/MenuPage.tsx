import { CategoryList } from "@/app/(site)/components/category/CategoryList"
import { ProductList } from "@/app/menu/components/ProductList"
import Header from "@/components/layout/header/Header"
import { ICategory } from "@/types"

interface IMenuPage {
  categories: ICategory[]
}

const MenuPage = ({ categories }: IMenuPage) => {
  return (
    <>
      <Header />
      <CategoryList categories={categories} />
      <ProductList />
    </>
  )
}

export { MenuPage }
