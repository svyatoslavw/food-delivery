import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Rating } from "react-simple-star-rating"
import { toast } from "sonner"
import * as z from "zod"

export const Schema = z.object({
  text: z.string().min(10, "You text must contain at least 10 characters").max(100),
  rating: z.number().min(0.5).max(5)
})

const CreateProductReview = () => {
  const form = useForm<z.infer<typeof Schema>>({
    resolver: zodResolver(Schema),
    defaultValues: {
      text: "",
      rating: 2.5
    }
  })

  const onSubmit = form.handleSubmit((values: z.infer<typeof Schema>) => {
    console.log("@", values.rating, values.text)
    toast.success("Review successfully created!")
  })

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="p-2 bg-secondary/20 gap-2 flex flex-col rounded-xl">
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Write New Review</FormLabel>
              <FormControl>
                <Textarea className="min-h-40" placeholder="Your text..." {...field} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <Rating
              onClick={field.onChange}
              initialValue={field.value}
              SVGstyle={{
                display: "inline-block"
              }}
              size={40}
              transition
              fillColor="red"
              allowFraction
            />
          )}
        />
        <Button type="submit" className="block w-full" variant={"outline"}>
          Create Review
        </Button>
      </form>
    </Form>
  )
}

export { CreateProductReview }
