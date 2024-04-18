import { AdminLink } from "./AdminLink"
import { Search } from "./Search"
import RegisterOrLoginButton from "@/components/layout/header/RegisterOrLoginButton"
import { Profile } from "@/components/layout/profile/Profile"
import { Heading } from "@/components/ui/heading"
import { ThemeToggler } from "@/components/ui/theme-toggler"

const Header = () => {
  return (
    <Heading text="Welcome" className="text-3xl no-underline drop-shadow-lg shadow-black">
      <Search />
      <ThemeToggler />
      <AdminLink />
      <Profile />
      <RegisterOrLoginButton />
    </Heading>
  )
}

export default Header
