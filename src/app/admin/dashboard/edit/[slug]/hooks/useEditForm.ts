import { ADMIN_URL } from "@/lib/config/url.config"
import { createClient } from "@/lib/supabase/client"
import { generateSlug } from "@/lib/utils"
import { IProduct } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"


const MAX_UPLOAD_SIZE = 1024 * 1024 * 5 // 5MB
const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/png"]
const SUCCESS_MESSAGE = "Product updated successfully!"
const ERROR_MESSAGE = "Something went wrong!"

export const updateProductSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters."
  }),
  slug: z.string().optional(),
  price: z.number().min(2, {
    message: "Price must be at least 2 dollars."
  }),
  discount: z.number().optional(),
  description: z.string().min(20, {
    message: "Description must be at least 20 characters."
  }),
  category_id: z.string(),
  image_url: z
    .array(
      z
        .any()
        .refine((file) => file?.size <= MAX_UPLOAD_SIZE, `Max image size is 1 MB.`)
        .refine((file) => ACCEPTED_FILE_TYPES.includes(file?.type), "Only.jpeg, .png formats are supported.")
    )
    .default([])
})

export const useEditForm = (product: IProduct) => {
  const { replace } = useRouter()

  const editForm = useForm<z.infer<typeof updateProductSchema>>({
    resolver: zodResolver(updateProductSchema),
    defaultValues: {
      title: product.title,
      price: product.price,
      slug: product.slug,
      discount: product.discount,
      description: product.description,
      category_id: product.category_id
    }
  })

  const onSubmit = editForm.handleSubmit(async (values: z.infer<typeof updateProductSchema>) => {
    const supabase = createClient()
    const file = values.image_url[0]

    const title = values.title.replace(/\s/g, "").toLowerCase()
    const slug = generateSlug(values.title)

    const productData = {
      title: values.title,
      price: values.price,
      slug: generateSlug(values.title),
      discount: values.discount,
      description: values.description,
      category_id: values.category_id
    }

    if (file) {
      const { data: imageData, error: imageError } = await supabase.storage.from("images").upload(title, file, {
        upsert: true,
        cacheControl: "3600"
      })

      if (!imageError) {
        const { error } = await supabase
          .from("product")
          .update({
            ...productData,
            image_url: imageData?.path
          })
          .eq("id", product.id)

        if (!error) {
          toast.success(SUCCESS_MESSAGE, { cancel: { label: "Close" } })
          replace(ADMIN_URL.edit(slug))
        } else {
          toast.error(ERROR_MESSAGE, { cancel: { label: "Close" } })
        }
      } else {
        toast.error("Failed to upload image!", { cancel: { label: "Close" } })
      }
    } else {
      const { error } = await supabase.from("product").update(productData).eq("id", product.id)

      if (!error) {
        toast.success(SUCCESS_MESSAGE, { cancel: { label: "Close" } })
        replace(ADMIN_URL.edit(slug))
      } else {
        toast.error(ERROR_MESSAGE, { cancel: { label: "Close" } })
      }
    }
  })

  return {
    state: {
      isLoading: editForm.formState.isSubmitting
    },
    form: editForm,
    functions: { onSubmit }
  }
}
