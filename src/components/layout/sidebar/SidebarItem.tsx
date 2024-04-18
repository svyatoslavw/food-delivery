import { cn } from "@/lib/utils"
import { ISideLink } from "@/types"
import Link from "next/link"

const SidebarItem = ({ isActive, Icon, href, label }: ISideLink) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex cursor-pointer w-full select-none pl-10 items-center gap-3 hover:bg-primary/5 bg-transparent py-3 text-xs transition-colors",
        {
          ["bg-primary/[0.03] font-medium text-primary border-l-2 border-red-500"]: isActive
        }
      )}
    >
      <Icon size={18} />
      <div>{label}</div>
    </Link>
  )
}

export { SidebarItem }
