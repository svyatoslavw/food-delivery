import { UserService } from "@/lib/api/user.service"
import { useQuery } from "@tanstack/react-query"


const useProfile = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: () => UserService.getProfile()
  })

  return { user, isLoading }
}

export { useProfile }
