import { EditPage } from "@/app/admin/dashboard/edit/[slug]/components/EditPage"
import { CategoryService } from "@/lib/api/category.service"
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
    title: `Edit ${product.title} | GoMeal.`
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
  return await ProductService.getBySlug(params?.slug as string)
}

async function getCategories() {
  return await CategoryService.getAll()
}

export default async function EditProduct({ params }: IPageProductSlug) {
  const product = await getProduct(params)
  const categories = await getCategories()
  return <EditPage product={product} categories={categories} />
}
