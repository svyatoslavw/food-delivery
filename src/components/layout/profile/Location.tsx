import { REGIONS } from "@/components/layout/profile/countries.data"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import dynamic from "next/dynamic"
import React from "react"

const Location = () => {
  const LazyMap = dynamic(() => import("@/components/layout/profile/Map"), {
    ssr: true,
    loading: () => <Skeleton className="h-[50vh] w-full" />
  })
  const [location, setLocation] = React.useState("")
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Change</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Change your Address</DialogTitle>
          <DialogDescription>From the listed regions, select the one you are in.</DialogDescription>
        </DialogHeader>
        <Select required onValueChange={(value) => setLocation(value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a Country" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Countries</SelectLabel>
              {REGIONS.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label} / {item.region}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <LazyMap location={location} />
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="default" className={"bg-red-600 hover:bg-red-700"}>
              Save location
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export { Location }
