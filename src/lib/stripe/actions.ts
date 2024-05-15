"use server"

import { ICartItem } from "@/types"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function checkout(email: string, items: ICartItem[]) {
  const lineItems = items.map((item) => ({
    price: item.product.price_id,
    quantity: item.quantity
  }))

  return JSON.stringify(
    await stripe.checkout.sessions.create({
      success_url: process.env.APP_URL,
      cancel_url: process.env.APP_URL,
      customer_email: email,
      line_items: lineItems,
      mode: "payment"
    })
  )
}

export async function manageBilling(customer_id: string) {
  return JSON.stringify(
    await stripe.billingPortal.sessions.create({
      customer: customer_id,
      return_url: process.env.APP_URL
    })
  )
}
