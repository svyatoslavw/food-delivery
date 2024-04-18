"use client"

import { useFilter } from "@/app/menu/hooks/useFilter"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"
import { usePathname } from "next/navigation"
import React from "react"

const Search = () => {
  const pathname = usePathname()
  const [searchTerm, setSearchTerm] = React.useState<string>("")
  const { updateQueryParams } = useFilter(pathname !== "/menu")

  const handleSearch = () => {
    updateQueryParams({ searchTerm, category: "", page: 1 })
  }

  const handleClear = () => {
    setSearchTerm("")
    updateQueryParams({ searchTerm: "" })
  }

  return (
    <label className="relative">
      <SearchIcon onClick={handleSearch} color="red" size={20} className="absolute left-3 top-2.5" />
      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="What do you want eat today..."
        className="w-[360px] pl-10"
      />
    </label>
  )
}

export { Search }
