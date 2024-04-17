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
  category_id: string
  price_id: string
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

export interface IUserResponse {
  user: IUser | undefined
  isLoading: boolean
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

export enum EnumProductSort {
  HIGH_PRICE = "high-price",
  LOW_PRICE = "low-price",
  NEWEST = "newest",
  OLDEST = "oldest"
}

export type TQueryParams = {
  sort?: EnumProductSort | string
  searchTerm?: string
  page?: string | number
  perPage: string | number
  minPrice?: string
  maxPrice?: string
  category: string
}

export interface IStripeProduct {
  price: number
  title: string
  price_id: string
  quantity: number
}

export interface IOrder {
  id: number
  created_at: string
  total: number
  products: IStripeProduct[]
  status: EnumOrderStatus
  user_id: string
}

export type TPricingPlanInterval = "day" | "week" | "month" | "year"
export type TPricingType = "one_time" | "recurring"
export type TSubscriptionStatus = "trialing" | "active" | "canceled" | "incomplete" | "incomplete_expired" | "past_due" | "unpaid" | "paused"

export interface IPrice {
  active: boolean | null
  currency: string | null
  id: string | null
  interval: TPricingPlanInterval
  interval_count: number | null
  product_id: string | null
  trial_period_days: number | null
  type: TPricingType | null
  unit_amount: number | null
}

export interface ISubscription {
  id: string
  cancel_at: string | null
  cancel_at_period_end: boolean | null
  canceled_at: string | null
  created: string
  current_period_end: string
  current_period_start: string
  ended_at: string | null
  metadata: unknown
  price_id: string | null
  quantity: number | null
  status: TSubscriptionStatus
  trial_end: string | null
  trial_start: string | null
  user_id: string
}
