"use client"

import { EditProductCard } from "./EditProductCard"
import { EditForm } from "@/app/admin/dashboard/edit/[slug]/components/EditForm"
import { IProduct } from "@/types"

const EditPage = ({ product }: { product: IProduct }) => {
  return (
    <section className="flex flex-col w-full h-screen gap-6 justify-center items-center">
      <EditProductCard product={product} />
      <EditForm />
    </section>
  )
}

export { EditPage }
