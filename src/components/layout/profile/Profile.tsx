import { Address } from "@/components/layout/profile/Address"
import { BonusBalance } from "@/components/layout/profile/BonusBalance"
import { OrderList } from "@/components/layout/profile/OrderList"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { UserService } from "@/lib/api/user.service"
import { CircleUserIcon, Contact2Icon } from "lucide-react"


const Profile = async () => {
  const user = await UserService.getProfile("server")

  if (!user.id) return

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Contact2Icon />
        </Button>
      </SheetTrigger>
      <SheetContent className={"border-none"}>
        <SheetHeader>
          <SheetTitle>Your Profile</SheetTitle>
          <SheetDescription className="flex items-center gap-2 border-b border-primary/30 py-3">
            <CircleUserIcon size={40} />
            <div>
              <h3 className="font-medium">{user.email}</h3>
              <h5 className={"text-xs"}>{user.role}</h5>
            </div>
          </SheetDescription>
        </SheetHeader>
        <div className="flex py-4 px-2 flex-col gap-5 text-neutral-500 dark:text-neutral-300">
          <BonusBalance />
          <Address />
          <OrderList />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export { Profile }
