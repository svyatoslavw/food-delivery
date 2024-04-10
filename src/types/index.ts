import type { LucideIcon } from "lucide-react"

export interface IProduct {
  id: number
  created_at: string
  title: string
  slug: string
  description: string
  image_url: string
  price: number
  discount: number
}

export interface ICategory {
  id: string
  created_at: string
  title: string
  slug: string
  image_url: string
}

export interface IUser {
  id: string
  created_at: string
  email: string
  role: string
}

export interface ISideLink {
  label: string
  href: string
  Icon: LucideIcon
  isActive: boolean
}

export interface ICartItem {
  id: number
  product: IProduct
  quantity: number
}

export enum EnumOrderStatus {
  PENDING = "PENDING",
  PAYED = "PAYED",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED"
}

export interface IOrder {
  id: number
  createdAt: string
  total: number
  items: ICartItem[]
  status: EnumOrderStatus
  user: IUser
}
