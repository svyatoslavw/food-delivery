import { cn } from "@/lib/utils"
import { ChevronRightIcon } from "lucide-react"
import Link from "next/link"
import React from "react"


export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string
  href?: string
  isLink?: boolean
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(({ className, text, children, href = "", isLink = false, ...props }, ref) => {
  return (
    <div className="my-5 flex items-center justify-between">
      <h1 ref={ref} className={cn("text-xl font-semibold underline underline-offset-1", className)}>
        {text}
      </h1>
      <div className="flex gap-1.5 items-center">
        {isLink && (
          <Link href={href} className="flex cursor-pointer items-center gap-2 text-red-600">
            <span className="hover:underline underline-offset-2">View all</span>
            <ChevronRightIcon className=" transition-transform hover:scale-150" size={16} />
          </Link>
        )}
        {children}
      </div>
    </div>
  )
})
Heading.displayName = "Heading"

export { Heading }
