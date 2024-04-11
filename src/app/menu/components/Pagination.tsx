import { Button } from "@/components/ui/button"

interface IPagination {
  numberPages: number
  changePage: (page: string) => void
  currentPage?: number | string
}

const Pagination = ({ numberPages, changePage, currentPage }: IPagination) => {
  return (
    <div className="text-center mx-auto justify-center mt-16 mb-4 flex w-full gap-2">
      {Array.from({ length: numberPages > 1 ? numberPages : 1 }).map((_, index) => {
        const pageNumber = (index + 1).toString()

        return (
          <Button
            variant={currentPage === pageNumber ? "destructive" : "secondary"}
            className="mx-0.5 p-3 aspect-square text-sm disabled:opacity-100"
            key={pageNumber}
            defaultValue={1}
            onClick={() => changePage(pageNumber)}
            disabled={currentPage === pageNumber}
          >
            {pageNumber}
          </Button>
        )
      })}
    </div>
  )
}

export default Pagination
