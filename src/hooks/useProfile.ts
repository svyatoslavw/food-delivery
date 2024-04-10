import { UserService } from "@/lib/api/user.service"
import { useQuery } from "@tanstack/react-query"


const useProfile = (type: "client" | "server") => {
  const { data: user, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: () => UserService.getProfile(type)
  })

  return { user, isLoading }
}

export { useProfile }
