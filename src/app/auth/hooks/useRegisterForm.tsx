import { login } from "@/app/auth/actions"
import { PUBLIC_URL } from "@/lib/config/url.config"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"


export const RegisterSchema = z
  .object({
    email: z.string().email("Enter a valid email"),
    password: z.string().min(6, {
      message: "Password must have than 6 characters."
    }),
    confirm: z.string().min(6, {
      message: "Enter your password again"
    })
  })
  .refine((data) => data.confirm === data.password, {
    message: "Password didn't match",
    path: ["confirm"]
  })
export const useRegisterForm = () => {
  const { replace } = useRouter()

  const registerForm = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      confirm: ""
    }
  })

  const onSubmit = registerForm.handleSubmit(async (data: z.infer<typeof RegisterSchema>) => {
    const res = await login(data)
    const { error } = JSON.parse(res)
    if (!error) {
      toast.success("Account created successfully!", { cancel: { label: "Close" } })
      replace(PUBLIC_URL.home())
    } else {
      toast.error("Something went wrong!", { cancel: { label: "Close" } })
    }
  })

  return {
    state: {
      isLoading: registerForm.formState.isSubmitting
    },
    form: registerForm,
    functions: { onSubmit }
  }
}
