import { ProductSlugItem } from "./ProductSlugItem"
import Header from "@/components/layout/header/Header"
import type { IProduct } from "@/types"


const ProductSlugPage = ({ product }: { product: IProduct }) => {
  return (
    <section>
      <Header />
      <ProductSlugItem product={product} />
    </section>
  )
}

export { ProductSlugPage }
