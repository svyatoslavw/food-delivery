import { register } from "@/app/auth/actions"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PasswordInput } from "@/components/ui/password-input"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoaderIcon } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod";


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
const RegisterForm = () => {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      confirm: ""
    }
  })

  async function onSubmit(data: z.infer<typeof RegisterSchema>) {
    await register(data).then(() => setClicked(true))
    form.reset()
    toast.success("Account created successfully!", { cancel: "Close" })
  }

  const [clicked, setClicked] = useState(false)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-3">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@gmail.com" autoComplete="username" {...field} type="email" onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput autoComplete="new-password" placeholder="password" {...field} onChange={field.onChange} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm</FormLabel>
              <FormControl>
                <PasswordInput autoComplete="new-password" placeholder="confirm password" {...field} onChange={field.onChange} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        {clicked && <div className="text-sm w-full text-center">Sign up link sent! Go confirm your email.</div>}
        <Button disabled={!form.formState.isDirty || form.formState.isSubmitting} type="submit" className="w-full flex gap-2">
          {form.formState.isSubmitting && <LoaderIcon size={14} className={cn("animate-spin")} />}
          Register
        </Button>
      </form>
    </Form>
  )
}
export { RegisterForm }
