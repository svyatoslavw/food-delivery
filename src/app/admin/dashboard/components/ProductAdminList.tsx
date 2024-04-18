"use client"

import { ProductAdminItem } from "@/app/admin/dashboard/components/ProductAdminItem"
import { Pagination } from "@/app/menu/components/Pagination"
import { useFilter } from "@/app/menu/hooks/useFilter"
import { Heading } from "@/components/ui/heading"
import { IProduct } from "@/types"

interface IProductAdminList {
  products: IProduct[]
  count: number
}

const ProductAdminList = ({ products, count }: IProductAdminList) => {
  const { queryParams, updateQueryParams } = useFilter()

  return (
    <div className={"my-6"}>
      <Heading text={"All products"} />
      <div className={"grid grid-cols-5 gap-3"}>
        {products.map((product) => (
          <ProductAdminItem product={product} key={product.id} />
        ))}
      </div>
      <Pagination changePage={(page) => updateQueryParams({ page })} currentPage={queryParams.page} numberPages={Math.ceil(count / 10)} />
    </div>
  )
}

export { ProductAdminList }
