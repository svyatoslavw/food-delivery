import { TableCell, TableRow } from "@/components/ui/table"
import { useLoadImage } from "@/hooks/useLoadImage"
import { convertCurrency } from "@/lib/utils"
import { IProduct } from "@/types"
import { SettingsIcon } from "lucide-react"
import Image from "next/image"
import React from "react"


const TableItem = ({ product }: { product: IProduct }) => {
  const image = useLoadImage(product)
  return (
    <TableRow key={product.id} className={"p-0 h-5"}>
      <TableCell className="font-medium w-5 p-1">
        <div className={"flex gap-3 items-center"}>
          <SettingsIcon className={"hover:animate-spin hover:opacity-100 opacity-60"} />
          <span>{product.title}</span>
        </div>
      </TableCell>
      <TableCell className={"text-start w-5 p-0.5"}>{convertCurrency(product.price)}</TableCell>
      <TableCell className={"text-center w-5 p-0.5"}>{product.discount}%</TableCell>
      <TableCell className={"text-start w-5 p-0.5"}>
        <div className={"flex items-center w-full justify-center"}>
          <Image draggable={false} src={image ?? "burger_default.png"} alt={product.slug} width={70} height={70} />
        </div>
      </TableCell>
    </TableRow>
  )
}

export default TableItem
