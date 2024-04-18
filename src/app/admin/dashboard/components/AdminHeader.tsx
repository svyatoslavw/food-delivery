import { AddNewMenu } from "@/app/admin/dashboard/components/AddNewMenu"
import { AddNewProduct } from "@/app/admin/dashboard/components/AddNewProduct"
import RegisterOrLoginButton from "@/components/layout/header/RegisterOrLoginButton"
import { Input } from "@/components/ui/input"
import { ThemeToggler } from "@/components/ui/theme-toggler"
import { CategoryService } from "@/lib/api/category.service"
import { SearchIcon } from "lucide-react"

const AdminHeader = async () => {
  const categories = await CategoryService.getAll()
  return (
    <div className={"flex my-2 w-full justify-between items-center"}>
      <label className="relative">
        <SearchIcon color="red" size={20} className="absolute left-3 top-2.5" />
        <Input placeholder="What do you want eat today..." className="w-[360px] pl-10" />
      </label>
      <div className="flex gap-2 items-center">
        <AddNewMenu />
        <AddNewProduct categories={categories} />
        <ThemeToggler />
        <RegisterOrLoginButton />
      </div>
    </div>
  )
}

export { AdminHeader }
