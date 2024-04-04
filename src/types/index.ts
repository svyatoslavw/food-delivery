import type { LucideIcon } from "lucide-react"

export interface IProduct {
  id: number
  created_at: string
  title: string
  description: string
  image_url: string
  price: number
  discount: number
}

export interface ISideLink {
  label: string
  href: string
  Icon: LucideIcon
  isActive: boolean
}
