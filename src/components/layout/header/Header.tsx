import LogButtons from "@/components/layout/header/LogButtons"
import { Heading } from "@/components/ui/heading"
import { Input } from "@/components/ui/input"
import { ThemeToggler } from "@/components/ui/theme-toggler"
import { SearchIcon } from "lucide-react"
import React from "react"


const Header = () => {
  return (
    <Heading text="Welcome" className="text-3xl">
      <label className="relative">
        <SearchIcon color="red" size={20} className="absolute left-3 top-2.5" />
        <Input placeholder="What do you want eat today..." className="w-[360px] pl-10" />
      </label>
      <ThemeToggler />
      <LogButtons />
    </Heading>
  )
}

export default Header
