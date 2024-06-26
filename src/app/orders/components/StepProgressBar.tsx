import { cn } from "@/lib/utils"
import { EnumOrderStatus } from "@/types"
import { DollarSignIcon, LoaderIcon, PackageCheckIcon, TruckIcon } from "lucide-react"

const MARGIN = 10

const StepProgressBar = ({ status }: { status: EnumOrderStatus }) => {
  let stepPercentage = 0
  let first = false
  let second = false
  let third = false
  let fourth = false

  switch (status) {
    case EnumOrderStatus.PENDING:
      stepPercentage = 0 + MARGIN
      first = true
      break
    case EnumOrderStatus.PAYED:
      stepPercentage = 33.3 + MARGIN
      first = true
      second = true
      break
    case EnumOrderStatus.SHIPPED:
      stepPercentage = 66.6 + MARGIN
      first = true
      second = true
      third = true
      break
    case EnumOrderStatus.DELIVERED:
      stepPercentage = 100 + MARGIN
      first = true
      second = true
      third = true
      fourth = true
      break
    default:
      stepPercentage = 0
  }
  return (
    <div className="flex h-[2px] w-full leading-none rounded relative bg-neutral-300 justify-between items-center z-0 my-8">
      <div className="h-[2px] animate-shine bg-red-500 absolute left-0 bottom-0 transition-all" style={{ width: `${stepPercentage}%` }}></div>
      <div
        className={cn(
          "flex justify-center items-center z-10 text-gray-500 dark:text-gray-200 p-2 text-xs bg-white dark:bg-black rounded-full border-2 border-red-400 cursor-pointer",
          { ["bg-red-500 dark:bg-red-500 text-background z-10 border-none"]: first }
        )}
      >
        <LoaderIcon size={18} />
      </div>
      <div
        className={cn(
          "flex justify-center items-center z-10 text-gray-500 dark:text-gray-200 p-2 text-xs bg-white dark:bg-black rounded-full border-2 border-red-400 cursor-pointer",
          { ["bg-red-500 dark:bg-red-500 text-background z-10 border-none"]: second }
        )}
      >
        <DollarSignIcon size={18} />
      </div>
      <div
        className={cn(
          "flex justify-center items-center z-10 text-gray-500 dark:text-gray-200 p-2 text-xs bg-white dark:bg-black rounded-full border-2 border-red-400 cursor-pointer",
          { ["bg-red-500 dark:bg-red-500 text-background z-10 border-none"]: third }
        )}
      >
        <TruckIcon size={18} />
      </div>
      <div
        className={cn(
          "flex justify-center items-center z-10 text-gray-500 dark:text-gray-200 p-2 text-xs bg-white dark:bg-black rounded-full border-2 border-red-400 cursor-pointer",
          { ["bg-red-500 dark:bg-red-500 text-background z-10 border-none"]: fourth }
        )}
      >
        <PackageCheckIcon size={18} />
      </div>
    </div>
  )
}

export { StepProgressBar }
