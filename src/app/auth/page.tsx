import { AuthForm } from "./components/AuthForm"
import { CREATOR, GITHUB_URL, SITE_KEYWORDS, SITE_NAME, SITE_URL } from "@/lib/config/seo.config"
import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  icons: {
    icon: "icon.png",
    shortcut: "icon.png"
  },
  title: {
    absolute: `Auth - ${SITE_NAME}`,
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

export default async function Auth() {
  return (
    <React.Suspense>
      <AuthForm />
    </React.Suspense>
  )
}
