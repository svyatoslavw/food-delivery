import { MenuPage } from "@/app/menu/components/MenuPage"
import { CategoryService } from "@/lib/api/category.service"
import { ProductService } from "@/lib/api/product.service"
import { CREATOR, GITHUB_URL, SITE_KEYWORDS, SITE_NAME, SITE_URL } from "@/lib/config/seo.config"
import { Metadata } from "next"


export const metadata: Metadata = {
  icons: {
    icon: "icon.ico",
    shortcut: "icon.ico"
  },
  title: {
    absolute: "Menu - Food Delivery",
    template: `%s | ${SITE_NAME}`
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    emails: `example@${SITE_NAME}`
  },
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  creator: CREATOR,
  authors: {
    name: CREATOR,
    url: GITHUB_URL
  },
  keywords: SITE_KEYWORDS
}
export default async function Menu({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const page = searchParams["page"] ?? "1"
  const per_page = searchParams["per_page"] ?? "5"

  const categories = await CategoryService.getAll()
  const initialProducts = await ProductService.getByCategory(searchParams)
  const count = await ProductService.getCountCategoryProducts(searchParams)
  return <MenuPage categories={categories} initialProducts={initialProducts} count={count || 0} />
}
