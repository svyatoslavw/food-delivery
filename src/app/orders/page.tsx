import { OrdersPage } from "./components/OrdersPage"
import { OrderService } from "@/lib/api/order.service"
import { CREATOR, GITHUB_URL, SITE_KEYWORDS, SITE_NAME, SITE_URL } from "@/lib/config/seo.config"
import { createServerClient } from "@/lib/supabase/server"
import { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  icons: {
    icon: "icon.png",
    shortcut: "icon.png"
  },
  title: {
    absolute: `My orders - ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    emails: `example@${SITE_NAME}`
  },
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  creator: CREATOR,
  authors: {
    name: CREATOR,
    url: GITHUB_URL
  },
  keywords: SITE_KEYWORDS
}

export default async function Orders() {
  const supabase = createServerClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/")
  }

  const orders = await OrderService.getAll(data.user.id)

  return (
    <div>
      <OrdersPage orders={orders} />
    </div>
  )
}
