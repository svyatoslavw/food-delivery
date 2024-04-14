"use client"

import { useFilter } from "../hooks/useFilter"
import Pagination from "./Pagination"
import { ProductItem } from "./ProductItem"
import { IProduct } from "@/types"
import { LoaderIcon } from "lucide-react"


interface IProductList {
  initialProducts: IProduct[]
  count: number
}

const ProductList = ({ initialProducts, count }: IProductList) => {
  const { queryParams, updateQueryParams } = useFilter()

  if (!initialProducts)
    return (
      <div className="w-full flex justify-center">
        <LoaderIcon className="animate-spin" size={26} />
      </div>
    )

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {initialProducts?.length ? (
          initialProducts.map((product) => <ProductItem product={product} key={product.id} />)
        ) : (
          <div className="grid w-full text-xl col-span-full font-medium justify-center">Products not found!</div>
        )}
      </div>
      {initialProducts.length > 0 && (
        <Pagination
          changePage={(page) => updateQueryParams({ page })}
          currentPage={queryParams.page}
          numberPages={Math.ceil(count / +queryParams.perPage!)}
        />
      )}
    </>
  )
}

export { ProductList }
