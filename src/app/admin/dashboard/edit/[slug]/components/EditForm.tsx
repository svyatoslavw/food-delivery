"use client"

import { useEditForm } from "@/app/admin/dashboard/edit/[slug]/hooks/useEditForm"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import type { ICategory, IProduct } from "@/types"
import { LoaderIcon } from "lucide-react"

interface IEditForm {
  categories: ICategory[]
  product: IProduct
}

const EditForm = ({ product, categories }: IEditForm) => {
  const { form, state, functions } = useEditForm(product)
  return (
    <Form {...form}>
      <form
        onSubmit={functions.onSubmit}
        className={"space-y-2 w-[900px] p-4 bg-secondary/30 flex flex-col text-neutral-500 dark:text-neutral-300 text-xs"}
      >
        <h1 className={"text-3xl font-semibold"}>Edit Product</h1>
        <section className="flex gap-5">
          <div className="w-1/2 flex flex-col gap-2">
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
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input disabled={state.isLoading} placeholder="Price..." type="number" {...field} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="discount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Discount</FormLabel>
                  <FormControl>
                    <Input disabled={state.isLoading} placeholder="Discount..." type="number" {...field} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Select disabled={state.isLoading} onValueChange={field.onChange} defaultValue={product.category_id}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Categories</SelectLabel>
                          {categories.map((category) => (
                            <SelectItem key={category.id} value={category.id}>
                              {category.title}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-1/2 flex flex-col gap-2">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      className="min-h-[134px]"
                      disabled={state.isLoading}
                      placeholder="Description..."
                      {...field}
                      onChange={field.onChange}
                    />
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
              Save Changes
            </Button>
          </div>
        </section>
      </form>
    </Form>
  )
}

export { EditForm }
