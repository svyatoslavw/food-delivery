export interface ICategoryLink {
  label: string
  image: string
}

export const categories: ICategoryLink[] = [
  {
    label: "Baked",
    image: "/Baked22.png"
  },
  {
    label: "Burger",
    image: "/Burger22.png"
  },
  {
    label: "Beverage",
    image: "/Coffee22.png"
  },
  {
    label: "Chicken",
    image: "/Chicken22.png"
  },
  {
    label: "Pizza",
    image: "/Fast22.png"
  },
  {
    label: "Seafood",
    image: "/Fish22.png"
  }
] as const
