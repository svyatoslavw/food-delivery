export const PUBLIC_URL = {
  root: (url = "") => `${url ? "/" + url : ""}`,

  home: () => "/",
  orders: () => "/orders",
  favorites: () => "/favorites",
  settings: () => "/settings",

  login: () => "/auth/login",
  register: () => "/auth/register",

  playlist: (slug = "") => PUBLIC_URL.root(`playlist${slug ? "/" + slug : ""}`),
  track: (slug = "") => PUBLIC_URL.root(`track${slug ? "/" + slug : ""}`)
}

export const ADMIN_URL = {
  root: (url = "") => `/admin${url ? "/" + url : ""}`
}
