export interface IPopularItem {
  image: string
  title: string
  price: number
  discount: number
  isFavorite: boolean
}

export const popular: IPopularItem[] = [
  {
    image: "/popburger1.png",
    title: "Beef burger",
    price: 5.59,
    discount: 15,
    isFavorite: false
  },
  {
    image: "/popburger3.png",
    title: "Cheese burger",
    price: 5.59,
    discount: 0,
    isFavorite: true
  },
  {
    image: "/popburger1.png",
    title: "Fish burger",
    price: 5.59,
    discount: 0,
    isFavorite: false
  }
]
