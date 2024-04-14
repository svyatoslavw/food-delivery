import { login } from "@/app/auth/actions"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"


export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: "Password is required."
  })
})

export const useLoginForm = () => {
  const { replace } = useRouter()

  const loginForm = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit = loginForm.handleSubmit(async (data: z.infer<typeof LoginSchema>) => {
    const res = await login(data)
    const { error } = JSON.parse(res)
    if (!error) {
      toast.success("Successfully login!", { cancel: { label: "Close" } })
      replace("/")
    } else {
      toast.error("Invalid login credentials!", { cancel: { label: "Close" } })
    }
  })

  return {
    state: {
      isLoading: loginForm.formState.isSubmitting,
      isDirty: !loginForm.formState.isDirty
    },
    form: loginForm,
    functions: { onSubmit }
  }
}
