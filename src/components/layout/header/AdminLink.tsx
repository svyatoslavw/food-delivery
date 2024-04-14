import { Button } from "@/components/ui/button"
import { UserService } from "@/lib/api/user.service"
import { ADMIN_URL } from "@/lib/config/url.config"
import { ShieldAlert } from "lucide-react"
import Link from "next/link"

const AdminLink = async () => {
  const user = await UserService.getProfile("server")
  if (!user.id || user.role !== "admin") return
  return (
    <Button className="p-1 aspect-square" variant={"outline"}>
      <Link href={ADMIN_URL.dashboard()} className="p-1.5">
        <ShieldAlert />
      </Link>
    </Button>
  )
}

export { AdminLink }
