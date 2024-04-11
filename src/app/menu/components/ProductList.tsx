"use client"

import { useFilter } from "../hooks/useFilter"
import Pagination from "./Pagination"
import { ProductItem } from "./ProductItem"
import { createClient } from "@/lib/supabase/client"
import { ordersAtom, type TAddToCard } from "@/store"
import { IProduct } from "@/types"
import { useQuery } from "@tanstack/react-query"
import { useSetAtom } from "jotai"
import { LoaderIcon } from "lucide-react"
import { toast } from "sonner"


const ProductList = () => {
  const { queryParams, updateQueryParams, isFilterUpdated } = useFilter()

  const { data: products, isLoading } = useQuery({
    enabled: isFilterUpdated,
    queryKey: ["get products", queryParams.category, queryParams.page],
    queryFn: async () => {
      const supabase = createClient()
      const { data, error } = await supabase
        .from("product")
        .select("*")
        .eq("category_id", queryParams.category)
        .range((+queryParams.page! - 1) * +queryParams.perPage!, +queryParams.page! * +queryParams.perPage! - 1)
      if (error) return []
      return data as IProduct[]
    }
  })

  const { data: count } = useQuery({
    queryKey: ["get total count", queryParams.category],
    queryFn: async () => {
      const supabase = createClient()
      const { count, error } = await supabase.from("product").select("count", { count: "exact" }).eq("category_id", queryParams.category)
      if (error) return 0
      return count
    }
  })

  const setOrders = useSetAtom(ordersAtom)

  const addToCart: TAddToCard = (item: IProduct) => {
    setOrders((prev) => {
      const existIndex = prev.findIndex((order) => order.product.title === item.title)
      if (existIndex !== -1) {
        return prev.map((order, index) =>
          index === existIndex
            ? {
                ...order,
                quantity: order.quantity + 1
              }
            : order
        )
      } else {
        return [
          ...prev,
          {
            id: prev.length,
            quantity: 1,
            product: { ...item }
          }
        ]
      }
    })
    toast.success("Product successfully added to cart")
  }

  if (isLoading)
    return (
      <div className="w-full flex justify-center">
        <LoaderIcon className="animate-spin" size={26} />
      </div>
    )

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {products?.length ? (
          products.map((product) => <ProductItem addToCart={addToCart} product={product} key={product.id} />)
        ) : (
          <div className="grid w-full text-xl col-span-full font-medium justify-center">Products not found!</div>
        )}
      </div>
      <Pagination
        changePage={(page) => updateQueryParams("page", page.toString())}
        currentPage={queryParams.page}
        numberPages={Math.ceil(count! / +queryParams.perPage!)}
      />
    </>
  )
}

export { ProductList }
