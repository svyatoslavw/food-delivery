import { createClient } from "@/lib/supabase/client"
import { generateSlug } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import React from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"


const MAX_UPLOAD_SIZE = 1024 * 1024 * 5 // 5MB
const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/png"]
const SUCCESS_MESSAGE = "Product updated successfully!"
const ERROR_MESSAGE = "Something went wrong!"

export const addMenuSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters."
  }),
  slug: z.string().optional(),
  image_url: z
    .array(
      z
        .any()
        .refine((file) => file?.size <= MAX_UPLOAD_SIZE, `Max image size is 1 MB.`)
        .refine((file) => ACCEPTED_FILE_TYPES.includes(file?.type), "Only.jpeg, .png formats are supported.")
    )
    .refine((val) => val.length > 0, "Image is required")
    .default([])
})
export const useAddMenuForm = () => {
  const [open, setOpen] = React.useState(false)
  const { refresh } = useRouter()

  const form = useForm<z.infer<typeof addMenuSchema>>({
    resolver: zodResolver(addMenuSchema),
    defaultValues: {
      title: "",
      slug: ""
    }
  })

  const onSubmit = form.handleSubmit(async (values: z.infer<typeof addMenuSchema>) => {
    const supabase = createClient()

    const file = values.image_url[0]
    const title = values.title.replace(/\s/g, "").toLowerCase()

    const { data, error: imageError } = await supabase.storage.from("categories").upload(title, file, {
      upsert: true,
      cacheControl: "3600"
    })

    if (!imageError) {
      const { error } = await supabase.from("category").insert({
        title: title,
        slug: generateSlug(values.title),
        image_url: data?.path
      })
      if (!error) {
        toast.success(SUCCESS_MESSAGE, { cancel: { label: "Close" } })
        setOpen(false)
        refresh()
      } else {
        toast.error(ERROR_MESSAGE, { cancel: { label: "Close" } })
      }
    } else {
      toast.error("Failed to upload image!", { cancel: { label: "Close" } })
    }
  })

  return {
    state: {
      isLoading: form.formState.isSubmitting,
      open
    },
    form: form,
    functions: { onSubmit, setOpen }
  }
}
