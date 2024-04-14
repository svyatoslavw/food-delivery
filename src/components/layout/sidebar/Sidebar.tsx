import { SidebarItem } from "@/components/layout/sidebar/SidebarItem"
import type { ISideLink } from "@/types"
import { BeefIcon, PackageCheckIcon, SandwichIcon, SettingsIcon, StarIcon } from "lucide-react"
import { usePathname } from "next/navigation"
import { useMemo } from "react"


const DEFAULT_CATEGORY = "?category=97bca986-60a5-4df7-a1dd-d2435442efbf&page=1"

const Sidebar = () => {
  const pathname = usePathname()
  const routes: ISideLink[] = useMemo(
    () => [
      {
        label: "Home",
        href: "/",
        Icon: BeefIcon,
        isActive: pathname === "/"
      },
      {
        label: "Menu",
        href: "/menu" + DEFAULT_CATEGORY,
        Icon: SandwichIcon,
        isActive: pathname === "/menu" || pathname.startsWith("/product")
      },
      {
        label: "Food order",
        href: "/orders",
        Icon: PackageCheckIcon,
        isActive: pathname === "/orders"
      },
      {
        label: "Favorite",
        href: "/favorite",
        Icon: StarIcon,
        isActive: pathname === "/favorite"
      },
      {
        label: "Settings",
        href: "/settings",
        Icon: SettingsIcon,
        isActive: pathname === "/settings"
      }
    ],
    [pathname]
  )

  return (
    <div className="flex h-svh w-64 flex-col items-center py-10 ">
      <h1 className="text-shadow mb-10 text-2xl font-bold drop-shadow-lg">
        GoMeal<span className="text-pink-500 drop-shadow-lg">.</span>
      </h1>
      <div className="flex flex-col gap-3">
        {routes.map((route) => (
          <SidebarItem {...route} key={route.href} />
        ))}
      </div>
    </div>
  )
}

export { Sidebar }
