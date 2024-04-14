import { CategoryAdminList } from "@/app/admin/dashboard/components/CategoryAdminList"
import { ProductAdminList } from "@/app/admin/dashboard/components/ProductAdminList"
import RegisterOrLoginButton from "@/components/layout/header/RegisterOrLoginButton"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Input } from "@/components/ui/input"
import { ThemeToggler } from "@/components/ui/theme-toggler"
import { ICategory, IProduct } from "@/types"
import { SearchIcon } from "lucide-react"


interface IDashboardPage {
  categories: ICategory[]
  products: IProduct[]
  count: number
}

const DashboardPage = ({ categories, products, count }: IDashboardPage) => {
  return (
    <section>
      <Heading text="Welcome" className="text-3xl no-underline drop-shadow-lg shadow-black">
        <ThemeToggler />
        <RegisterOrLoginButton />
      </Heading>
      <div className={"flex my-2 w-full justify-between items-center"}>
        <label className="relative">
          <SearchIcon color="red" size={20} className="absolute left-3 top-2.5" />
          <Input placeholder="What do you want eat today..." className="w-[360px] pl-10" />
        </label>
        <section className="flex gap-2 items-center">
          <Button variant={"outline"}>Add New Menu</Button>
          <Button variant={"outline"}>Add New Product</Button>
        </section>
      </div>
      <CategoryAdminList categories={categories} />
      <ProductAdminList products={products} count={count} />
    </section>
  )
}

export { DashboardPage }
