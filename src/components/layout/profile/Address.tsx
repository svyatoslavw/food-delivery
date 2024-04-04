import { Location } from "@/components/layout/profile/Location"
import { MapPinIcon } from "lucide-react"
import React from "react"


const Address = () => {
  return (
    <div className={"flex flex-col gap-1"}>
      <h3 className={"text-sm font-medium"}>Your Address</h3>
      <div className={"flex justify-between items-center"}>
        <div className={"flex gap-1 text-sm items-center font-bold"}>
          <MapPinIcon color={"red"} />
          <span>Elm Street, 23</span>
        </div>
        <Location />
      </div>
      <p className={"text-xs"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
      </p>
    </div>
  )
}

export { Address }
