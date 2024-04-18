"use client"

import { useFilter } from "../hooks/useFilter"
import { Pagination } from "./Pagination"
import { ProductItem } from "./ProductItem"
import type { IProduct, IUser } from "@/types"

interface IProductList {
  initialProducts: IProduct[]
  count: number
  user: IUser
}

const ProductList = ({ initialProducts, count, user }: IProductList) => {
  const { queryParams, updateQueryParams } = useFilter()

  return (
    <main>
      <div className="grid grid-cols-5 gap-4">
        {initialProducts.length ? (
          initialProducts.map((product) => <ProductItem product={product} user={user} key={product.id} />)
        ) : (
          <div className="grid w-full h-16 place-items-center border text-xl col-span-full my-4 font-medium justify-center">Products not found!</div>
        )}
      </div>
      {initialProducts.length > 0 && (
        <Pagination
          changePage={(page) => updateQueryParams({ page })}
          currentPage={queryParams.page}
          numberPages={Math.ceil(count / +queryParams.perPage!)}
        />
      )}
    </main>
  )
}

export { ProductList }
