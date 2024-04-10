import { type ICartItem, type IProduct } from "@/types"
import { atomWithStorage } from "jotai/utils"

//Types
export type TChngQualityProduct = (item: ICartItem) => void
export type TAddToCard = (item: IProduct) => void

//Atoms
export const ordersAtom = atomWithStorage<ICartItem[]>("orders", [])
