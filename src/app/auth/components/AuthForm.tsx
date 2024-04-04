"use client"

import { LoginForm } from "@/app/auth/components/LoginForm"
import { RegisterForm } from "@/app/auth/components/RegisterForm"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const AuthForm = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 dark:bg-black bg-white p-3 rounded-xl">
        <div className="w-full space-y-3">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 dark:bg-black bg-white">
              <TabsTrigger value="login" className={"data-[state=active]:bg-primary/10"}>
                Login
              </TabsTrigger>
              <TabsTrigger value="register" className={"data-[state=active]:bg-primary/10"}>
                Register
              </TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <LoginForm />
            </TabsContent>
            <TabsContent value="register">
              <RegisterForm />
            </TabsContent>
          </Tabs>
          {/*<OAuthForm/>*/}
        </div>
      </div>
    </div>
  )
}

export { AuthForm }
