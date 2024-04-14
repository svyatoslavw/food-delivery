//FIXME: Нужно доделать авторизацию, ловить ошибки и выбрасывать toasts.
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters."
  }),
  rating: z.number(),
  price: z.number().min(5, {
    message: "Price must be at least 5 dollars."
  }),
  discount: z.number().optional(),
  description: z.string().min(20, {
    message: "Description must be at least 20 characters."
  }),
  image: z.string()
})

const EditForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      rating: 2,
      price: 0,
      discount: 0,
      description: "",
      image: ""
    }
  })
  return (
    <Form {...form}>
      <form className={"space-y-2 w-[900px] py-2 px-4 bg-secondary/30 flex flex-col text-neutral-500 dark:text-neutral-300 text-xs"}>
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
                    <Input placeholder="Title..." {...field} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rating</FormLabel>
                  <FormControl>
                    <Input placeholder="Rating..." type="number" {...field} onChange={field.onChange} />
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
                    <Input placeholder="Price..." type="number" {...field} onChange={field.onChange} />
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
                    <Input placeholder="Discount..." type="number" {...field} onChange={field.onChange} />
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
                    <Textarea className="min-h-[134px]" placeholder="Description..." {...field} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <Input type={"file"} placeholder="Discount..." {...field} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className={"w-full"}>Save Changes</Button>
          </div>
        </section>
      </form>
    </Form>
  )
}

export { EditForm }
