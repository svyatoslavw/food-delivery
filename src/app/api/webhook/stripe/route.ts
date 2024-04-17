import { supabaseAdmin } from "@/lib/supabase/admin"
import { headers } from "next/headers"
import { buffer } from "node:stream/consumers"
import Stripe from "stripe"

interface User {
  id: string
}

const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET!

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: any) {
  const rawBody = await buffer(req.body)
  try {
    const sig = headers().get("stripe-signature")
    let event
    try {
      event = stripe.webhooks.constructEvent(rawBody, sig!, endpointSecret)
    } catch (err: any) {
      return Response.json({ error: `Webhook Error ${err?.message!} ` })
    }
    switch (event.type) {
      case "payment_intent.succeeded":
        console.log("@payment_intent.succeeded", event.data.object)
        break
      case "checkout.session.completed":
        const session = await stripe.checkout.sessions.retrieve(event.data.object.id, {
          expand: ["line_items"]
        })
        await onPaymentSucceeded(event.data.object.customer_email as string, session)
        break
      default:
        console.log(`Unhandled event type ${event.type}`)
    }
    return Response.json({})
  } catch (e) {
    return Response.json({ error: `Webhook Error` })
  }
}

async function onPaymentSucceeded(email: string, session: Stripe.Response<Stripe.Checkout.Session>) {
  if (!session || !session.line_items || !session.line_items.data) {
    return Response.json({ error: "Session not found!" })
  }

  const supabase = await supabaseAdmin()
  const { data: user, error: userError } = await supabase.from("user").select("id").eq("email", email).single()
  if (userError) {
    return Response.json({ error: userError.message })
  }
  const total = session.line_items.data.reduce((acc, item) => acc + item.amount_total, 0)

  const products = session.line_items.data.map((line: Stripe.LineItem) => {
    return {
      title: line.description,
      price: (line.amount_total / 100).toFixed(2),
      quantity: line.quantity,
      price_id: line.price?.id
    }
  })

  const { error: orderError } = await supabase.from("order").insert({
    user_id: user.id,
    products,
    total: (total / 100).toFixed(2),
    status: "PENDING"
  })

  if (orderError) {
    return Response.json({ error: orderError.message })
  }
}
