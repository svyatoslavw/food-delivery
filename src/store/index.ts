import type { ICartItem } from "@/types"
import { atomWithStorage } from "jotai/utils"

//Types
export type TChngQualityProduct = (item: ICartItem) => void

//Atoms
export const ordersAtom = atomWithStorage<ICartItem[]>("orders", [])
