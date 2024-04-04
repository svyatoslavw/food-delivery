import { REGIONS } from "@/components/layout/profile/countries.data"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertCurrency(total: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(total)
}

export const getCountryByValue = (value: string) => {
  return REGIONS.find((item) => item.value === value)
}
