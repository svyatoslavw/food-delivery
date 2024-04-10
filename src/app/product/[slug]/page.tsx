import { ProductSlugPage } from "./components/ProductSlugPage"
import { ProductService } from "@/lib/api/product.service"
import type { Metadata } from "next"

type TypeParamProductSlug = {
  slug?: string
}

interface IPageProductSlug {
  params: TypeParamProductSlug
}

export async function generateMetadata({ params }: IPageProductSlug): Promise<Metadata> {
  const product = await getProduct(params)

  return {
    title: `${product.title} | GoMeal.`
  }
}

export async function generateStaticParams() {
  const data = await ProductService.getAll()

  const paths = data?.map((product) => {
    return {
      params: { slug: product.slug }
    }
  })

  return paths
}

async function getProduct(params: TypeParamProductSlug) {
  const data = await ProductService.getBySlug(params?.slug as string)

  return data
}

export default async function Product({ params }: IPageProductSlug) {
  const product = await getProduct(params)
  return <ProductSlugPage product={product} />
}
