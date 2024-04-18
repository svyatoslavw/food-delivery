import Loading from "../loading"
import { MenuPage } from "@/app/menu/components/MenuPage"
import { CategoryService } from "@/lib/api/category.service"
import { ProductService } from "@/lib/api/product.service"
import { CREATOR, GITHUB_URL, SITE_KEYWORDS, SITE_NAME, SITE_URL } from "@/lib/config/seo.config"
import { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  icons: {
    icon: "icon.png",
    shortcut: "icon.png"
  },
  title: {
    absolute: `Menu - ${SITE_NAME}`,
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
  const [categories, initialProducts, count] = await Promise.all([
    CategoryService.getAll(),
    ProductService.getByCategory(searchParams),
    ProductService.getCountCategoryProducts(searchParams)
  ])

  const key = JSON.stringify(searchParams)

  return (
    <Suspense key={key} fallback={<Loading />}>
      <MenuPage categories={categories} initialProducts={initialProducts} count={count || 0} />
    </Suspense>
  )
}
