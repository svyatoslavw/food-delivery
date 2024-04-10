import { ProductSlugItem } from "./ProductSlugItem"
import Header from "@/components/layout/header/Header"
import type { IProduct } from "@/types"

const ProductSlugPage = ({ product }: { product: IProduct }) => {
  return (
    <section className="w-full h-[90vh] justify-center items-center">
      <Header />
      <ProductSlugItem product={product} />
    </section>
  )
}

export { ProductSlugPage }
