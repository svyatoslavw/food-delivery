import { CREATOR, GITHUB_URL, SITE_KEYWORDS, SITE_NAME, SITE_URL } from "@/lib/config/seo.config"
import { createServerClient } from "@/lib/supabase/server"
import { Metadata } from "next"
import { redirect } from "next/navigation"


export const metadata: Metadata = {
  icons: {
    icon: "icon.ico",
    shortcut: "icon.ico"
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

  return <div>Orders {data.user.email}</div>
}
