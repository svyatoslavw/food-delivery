import { OAuthButton } from "./OAuthButton"
import { useLoginForm } from "@/app/auth/hooks/useLoginForm"
import { GithubIcon } from "@/components/icons/github"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PasswordInput } from "@/components/ui/password-input"
import { cn } from "@/lib/utils"
import { LoaderIcon } from "lucide-react"

const LoginForm = () => {
  const { form, state, functions } = useLoginForm()

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
                <Input autoComplete="username" placeholder="example@gmail.com" {...field} type="email" onChange={field.onChange} />
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
                <PasswordInput autoComplete="current-password" placeholder="password" {...field} onChange={field.onChange} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={!form.formState.isDirty || state.isLoading} type="submit" className="w-full flex gap-2">
          {state.isLoading && <LoaderIcon size={14} className={cn("animate-spin")} />}
          Login
        </Button>
        <OAuthButton text="github" provider="github">
          <GithubIcon />
        </OAuthButton>
      </form>
    </Form>
  )
}
export { LoginForm }
