"use client"

import { EditProductCard } from "./EditProductCard"
import { EditForm } from "@/app/admin/dashboard/edit/[slug]/components/EditForm"
import type { ICategory, IProduct } from "@/types"


interface IEditPage {
  categories: ICategory[]
  product: IProduct
}

const EditPage = ({ product, categories }: IEditPage) => {
  return (
    <section className="flex flex-col w-full gap-6 justify-center items-center">
      <EditProductCard product={product} />
      <EditForm product={product} categories={categories} />
    </section>
  )
}

export { EditPage }
