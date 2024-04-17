import { Address } from "@/components/layout/profile/Address"
import { OrderList } from "@/components/layout/profile/OrderList"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { UserService } from "@/lib/api/user.service"
import { CircleUserIcon, ContactIcon } from "lucide-react"

const Profile = async () => {
  const user = await UserService.getProfile("server")

  if (!user.id) return

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <ContactIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className={"border-none py-2 px-3 w-[300px]"}>
        <SheetHeader className={"my-3"}>
          <SheetTitle>Your Profile</SheetTitle>
          <SheetDescription className="flex items-center gap-2 border rounded-lg bg-secondary dark:bg-secondary/30 py-2 px-4">
            <CircleUserIcon size={40} />
            <span className={"flex flex-col w-full items-start"}>
              <span className="font-medium">{user.email}</span>
              <span className={"text-xs"}>{user.role}</span>
            </span>
          </SheetDescription>
        </SheetHeader>
        <span className="flex py-4 px-1 flex-col text-neutral-500 dark:text-neutral-300">
          <Address />
          <OrderList user={user} />
        </span>
      </SheetContent>
    </Sheet>
  )
}

export { Profile }
