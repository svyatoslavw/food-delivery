export const PUBLIC_URL = {
  root: (url = "") => `${url ? "/" + url : ""}`,

  home: () => "/",
  orders: () => "/orders",
  favorites: () => "/favorites",
  settings: () => "/settings",

  auth: () => "/auth",

  product: (slug = "") => PUBLIC_URL.root(`product${slug ? "/" + slug : ""}`)
}

export const ADMIN_URL = {
  root: (url = "") => `/admin${url ? "/" + url : ""}`,
  dashboard: () => ADMIN_URL.root("dashboard"),
  edit: (url = "") => `/admin/dashboard/edit${url ? "/" + url : ""}`
}
