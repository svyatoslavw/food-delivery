import { AdminLink } from "./AdminLink"
import RegisterOrLoginButton from "@/components/layout/header/RegisterOrLoginButton"
import { Profile } from "@/components/layout/profile/Profile"
import { Heading } from "@/components/ui/heading"
import { Input } from "@/components/ui/input"
import { ThemeToggler } from "@/components/ui/theme-toggler"
import { SearchIcon } from "lucide-react"

const Header = () => {
  return (
    <Heading text="Welcome" className="text-3xl no-underline drop-shadow-lg shadow-black">
      <label className="relative">
        <SearchIcon color="red" size={20} className="absolute left-3 top-2.5" />
        <Input placeholder="What do you want eat today..." className="w-[360px] pl-10" />
      </label>
      <ThemeToggler />
      <AdminLink />
      <Profile />
      <RegisterOrLoginButton />
    </Heading>
  )
}

export default Header
