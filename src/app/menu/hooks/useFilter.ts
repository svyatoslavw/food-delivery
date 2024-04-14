import { queryParamsAtom } from "@/store"
import { TQueryParams } from "@/types"
import { useAtomValue } from "jotai"
import { useSetAtom } from "jotai/index"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import React from "react"


export const useFilter = (isMain?: boolean) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const queryParams = useAtomValue<Partial<TQueryParams>>(queryParamsAtom)
  const setQueryParams = useSetAtom(queryParamsAtom)

  const { replace } = useRouter()

  React.useEffect(() => {
    searchParams.forEach((value, key) => {
      setQueryParams((prev) => ({
        ...prev,
        [key]: value
      }))
    })
  }, [])

  const updateQueryParams = (values: Partial<TQueryParams>) => {
    const newParams = new URLSearchParams(searchParams.toString())

    for (const key in values) {
      if (Object.prototype.hasOwnProperty.call(values, key)) {
        const value = values[key as keyof TQueryParams]
        if (value) {
          newParams.set(key, String(value))
        } else {
          newParams.delete(key)
        }
      }
    }
    replace(pathname + (isMain ? "menu" : "") + (newParams.toString() ? `?${newParams.toString()}` : ""))
    setQueryParams((prev) => ({
      ...prev,
      ...values
    }))
  }

  const value = React.useMemo(() => ({ queryParams }), [queryParams])

  return {
    queryParams,
    updateQueryParams
  }
}
