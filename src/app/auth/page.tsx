import { AuthForm } from "./components/AuthForm"

export default async function Auth() {
  // const supabase = createServerClient()
  //
  // const {
  //   data: { user }
  // } = await supabase.auth.getUser()
  //
  // if (user) {
  //   return redirect("/")
  // }
  return <AuthForm />
}
