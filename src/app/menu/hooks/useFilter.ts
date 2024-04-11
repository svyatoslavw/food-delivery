import { isFilterUpdatedAtom, queryParamsAtom } from "@/store"
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

  const isFilterUpdated = useAtomValue(isFilterUpdatedAtom)
  const setIsFilterUpdated = useSetAtom(isFilterUpdatedAtom)

  const { replace } = useRouter()

  React.useEffect(() => {
    searchParams.forEach((value, key) => {
      setQueryParams((prev) => ({
        ...prev,
        [key]: value
      }))
    })
  }, [])

  const updateQueryParams = React.useCallback(
    (key: keyof TQueryParams, value: string) => {
      const newParams = new URLSearchParams(searchParams.toString())

      if (value) {
        newParams.set(key, String(value))
      } else {
        newParams.delete(key)
      }

      replace(pathname + isMain && "/menu" + (newParams.toString() ? `?${newParams.toString()}` : ""))
      setQueryParams((prev) => ({
        ...prev,
        [key]: value
      }))
      setIsFilterUpdated(true)
    },
    [queryParams, searchParams, pathname, isMain]
  )

  const value = React.useMemo(() => ({ queryParams, isFilterUpdated }), [queryParams, isFilterUpdated])

  return {
    ...value,
    updateQueryParams
  }
}
