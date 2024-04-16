"use client"

import { useAddMenuForm } from "@/app/admin/dashboard/hooks/useAddMenuForm"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { LoaderIcon } from "lucide-react"
import React from "react"

const MAX_UPLOAD_SIZE = 1024 * 1024 * 5 // 5MB
const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/png"]
const SUCCESS_MESSAGE = "Product updated successfully!"
const ERROR_MESSAGE = "Something went wrong!"

const AddNewMenu = () => {
  const { form, state, functions } = useAddMenuForm()
  return (
    <Dialog open={state.open} onOpenChange={functions.setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add New Menu</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Category</DialogTitle>
          <DialogDescription>Add a new category for products here.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={functions.onSubmit}
            className={"space-y-2 w-full py-2 px-4 bg-secondary/30 flex flex-col text-neutral-500 dark:text-neutral-300 text-xs"}
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input disabled={state.isLoading} placeholder="Title..." {...field} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <Input
                      disabled={state.isLoading}
                      type="file"
                      accept="image/*"
                      placeholder="Image..."
                      {...field}
                      value={undefined}
                      onChange={(e) => {
                        field.onChange(Array.from(e.target.files ?? []))
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className={"w-full"} type="submit">
              {state.isLoading && <LoaderIcon size={14} className={"animate-spin mr-1"} />}
              Create Menu
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export { AddNewMenu }
