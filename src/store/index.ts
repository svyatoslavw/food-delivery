import { EnumProductSort, type ICartItem, type IProduct, type TQueryParams } from "@/types"
import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

//Types
export type TChngQualityProduct = (item: ICartItem) => void
export type TAddToCard = (item: IProduct) => void

//Atoms
export const ordersAtom = atomWithStorage<ICartItem[]>("orders", [])
export const queryParamsAtom = atom<Partial<TQueryParams>>({
  searchTerm: "",
  sort: EnumProductSort.NEWEST,
  page: 1,
  perPage: 10
})

export const isFilterUpdatedAtom = atom<boolean>(true)
