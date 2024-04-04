"use server"

import { LoginSchema } from "@/app/auth/components/LoginForm"
import { RegisterSchema } from "@/app/auth/components/RegisterForm"
import { createServerClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import * as z from "zod"


export async function login(data: z.infer<typeof LoginSchema>) {
  const supabase = createServerClient()

  const { error } = await supabase.auth.signInWithPassword({
    email: data.email as string,
    password: data.password as string
  })

  if (error) {
    console.error(error)
    return false
  }

  revalidatePath("/", "layout")
  redirect("/")
}

export async function register(data: z.infer<typeof RegisterSchema>) {
  const supabase = createServerClient()

  const { error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password
  })

  if (error) {
    console.error(error)
    return
  }
}

export async function logout() {
  const supabase = createServerClient()
  const { error } = await supabase.auth.signOut()

  if (error) {
    console.error(error)
  }

  revalidatePath("/login")
  revalidatePath("/orders")
  revalidatePath("/", "layout")
}
