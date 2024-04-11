import { EnumProductSort, type ICartItem, type IProduct, type TQueryParams } from "@/types"
import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

//Types
export type TChngQualityProduct = (item: ICartItem) => void
export type TAddToCard = (item: IProduct) => void

//Atoms
const DEFAULT_CATEGORY = "97bca986-60a5-4df7-a1dd-d2435442efbf"
export const ordersAtom = atomWithStorage<ICartItem[]>("orders", [])
export const queryParamsAtom = atom<Partial<TQueryParams>>({
  searchTerm: "",
  sort: EnumProductSort.NEWEST,
  page: 1,
  perPage: 4,
  category: DEFAULT_CATEGORY
})

export const isFilterUpdatedAtom = atom<boolean>(true)
