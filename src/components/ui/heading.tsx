import { cn } from "@/lib/utils"
import React from "react"

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(({ className, text, children, ...props }, ref) => {
  return (
    <div className="my-5 flex items-center justify-between">
      <h1 ref={ref} className={cn("text-xl font-bold", className)}>
        {text}
      </h1>
      <div className="flex gap-1 items-center">{children}</div>
    </div>
  )
})
Heading.displayName = "Heading"

export { Heading }
