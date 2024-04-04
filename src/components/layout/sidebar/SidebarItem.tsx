import { cn } from "@/lib/utils"
import { ISideLink } from "@/types"
import Link from "next/link"


const SidebarItem = ({ isActive, Icon, href, label }: ISideLink) => {
  return (
    <Link
      href={href}
      className={cn("flex cursor-pointer select-none items-center gap-3 rounded-md bg-transparent px-6 py-2 text-xs transition-colors", {
        ["bg-gradient-custom font-medium text-white"]: isActive
      })}
    >
      <Icon size={16} />
      <div>{label}</div>
    </Link>
  )
}

export { SidebarItem }
