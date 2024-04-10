import { CategoryList } from "./category/CategoryList"
import { DiscountedList } from "@/app/(site)/components/discounted/DiscountedList"
import { PopularList } from "@/app/(site)/components/popular/PopularList"
import Header from "@/components/layout/header/Header"
import type { ICategory, IProduct } from "@/types"

interface IHomePage {
  discountedProducts: IProduct[]
  popularProducts: IProduct[]
  categories: ICategory[]
}

const HomePage = ({ popularProducts, categories, discountedProducts }: IHomePage) => {
  return (
    <div>
      <Header />
      {/*<div className="flex h-44 w-full justify-between rounded-xl bg-red-500 px-8">*/}
      {/*  <div className="flex flex-col justify-center">*/}
      {/*    <h2 className="mb-4 w-1/2 text-2xl font-bold text-white">Get Discount Voucher Up To 20% </h2>*/}
      {/*    <p className="w-2/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>*/}
      {/*  </div>*/}
      {/*  <div className="flex items-end justify-end">*/}
      {/*    <Image draggable={false} src={"/banner.png"} className=" object-contain" alt="banner" width={259} height={239} />*/}
      {/*  </div>*/}
      {/*</div>*/}
      <CategoryList categories={categories} />
      <PopularList products={popularProducts} />
      <DiscountedList products={discountedProducts} />
    </div>
  )
}

export { HomePage }
