import { ProductSlugPage } from "./components/ProductSlugPage"
import { ProductService } from "@/lib/api/product.service"
import { CREATOR, GITHUB_URL, SITE_KEYWORDS, SITE_NAME, SITE_URL } from "@/lib/config/seo.config"
import type { Metadata } from "next"

type TypeParamProductSlug = {
  slug?: string
}

interface IPageProductSlug {
  params: TypeParamProductSlug
}

export const dynamic = "force-dynamic"

export async function generateMetadata({ params }: IPageProductSlug): Promise<Metadata> {
  const product = await getProduct(params)

  return {
    title: `${product.title} - ${SITE_NAME}`,
    icons: {
      icon: "icon.png",
      shortcut: "icon.png"
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
}

export async function generateStaticParams() {
  const data = await ProductService.getAll()

  const paths = data.map((product) => {
    return {
      params: { slug: product.slug }
    }
  })

  return paths
}

async function getProduct(params: TypeParamProductSlug) {
  return await ProductService.getBySlug(params?.slug as string)
}

export default async function Product({ params }: IPageProductSlug) {
  const product = await getProduct(params)
  return <ProductSlugPage product={product} />
}
