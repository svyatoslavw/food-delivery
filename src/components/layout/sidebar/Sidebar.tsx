import { SidebarItem } from "@/components/layout/sidebar/SidebarItem"
import { PUBLIC_URL } from "@/lib/config/url.config"
import type { ISideLink } from "@/types"
import { BeefIcon, IterationCcwIcon, MapPinnedIcon, PackageCheckIcon, SandwichIcon, StarIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo } from "react"

const DEFAULT_CATEGORY = "?category=97bca986-60a5-4df7-a1dd-d2435442efbf&page=1"

const Sidebar = ({ isAdmin = false }: { isAdmin: boolean }) => {
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
      }
    ],
    [pathname]
  )

  const routesAdmin: ISideLink[] = useMemo(
    () => [
      {
        label: "Dashboard",
        href: "/admin/dashboard",
        Icon: MapPinnedIcon,
        isActive: pathname === "/admin/dashboard" || pathname.startsWith("/admin/dashboard/edit")
      },
      {
        label: "Return to the site",
        href: "/",
        Icon: IterationCcwIcon,
        isActive: pathname === "/"
      }
    ],
    [pathname]
  )

  return (
    <div className="flex h-svh w-64 flex-col items-center py-10 ">
      <Link href={PUBLIC_URL.home()} className="text-shadow mb-10 text-2xl font-bold drop-shadow-lg cursor-pointer">
        <span>{isAdmin ? "Dashboard" : "GoMeal"}</span>
        <span className="text-pink-500 drop-shadow-lg">.</span>
      </Link>
      <div className="flex flex-col gap-3">
        {isAdmin
          ? routesAdmin.map((route) => <SidebarItem {...route} key={route.href} />)
          : routes.map((route) => <SidebarItem {...route} key={route.href} />)}
      </div>
    </div>
  )
}

export { Sidebar }
