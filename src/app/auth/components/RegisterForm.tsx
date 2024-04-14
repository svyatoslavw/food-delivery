import { OAuthButton } from "./OAuthButton"
import { useRegisterForm } from "@/app/auth/hooks/useRegisterForm"
import { GithubIcon } from "@/components/icons/github"
import { GoogleIcon } from "@/components/icons/google"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PasswordInput } from "@/components/ui/password-input"
import { cn } from "@/lib/utils"
import { LoaderIcon } from "lucide-react"
import * as z from "zod"


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
  const { form, state, functions } = useRegisterForm()

  return (
    <Form {...form}>
      <form onSubmit={functions.onSubmit} className="w-full space-y-3">
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
        <Button disabled={!form.formState.isDirty || state.isLoading} type="submit" className="w-full flex gap-2">
          {state.isLoading && <LoaderIcon size={14} className={cn("animate-spin")} />}
          Register
        </Button>
        <OAuthButton text="google" provider="google">
          <GoogleIcon />
        </OAuthButton>
        <OAuthButton text="github" provider="github">
          <GithubIcon />
        </OAuthButton>
      </form>
    </Form>
  )
}
export { RegisterForm }
