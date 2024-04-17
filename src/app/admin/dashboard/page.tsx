import { DashboardPage } from "@/app/admin/dashboard/components/DashboardPage"
import { CategoryService } from "@/lib/api/category.service"
import { ProductService } from "@/lib/api/product.service"
import { CREATOR, GITHUB_URL, SITE_KEYWORDS, SITE_NAME, SITE_URL } from "@/lib/config/seo.config"
import { Metadata } from "next"

export const metadata: Metadata = {
  icons: {
    icon: "icon.png",
    shortcut: "icon.png"
  },
  title: {
    absolute: `Dashboard - ${SITE_NAME}`,
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

export default async function Admin({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const categories = await CategoryService.getAll()
  const products = await ProductService.getAllWithFilters(searchParams)
  const count = await ProductService.getCountAllProducts()

  return <DashboardPage categories={categories} products={products} count={count || 0} />
}
