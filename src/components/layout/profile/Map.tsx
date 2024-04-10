"use client"

import { getCountryByValue } from "@/lib/utils"
import { icon } from "leaflet"
import "leaflet/dist/leaflet.css"
import React from "react"
import { MapContainer, Marker, TileLayer } from "react-leaflet"


const ICON = icon({
  iconUrl: "https://images.vexels.com/media/users/3/131261/isolated/preview/b2e48580147ca0ed3f970f30bf8bb009-karten-standortmarkierung.png",
  iconSize: [50, 50]
})
export default function Map({ location }: { location: string }) {
  const region = getCountryByValue(location)
  return (
    <MapContainer
      zoomControl={false}
      dragging={false}
      scrollWheelZoom={false}
      className="h-[50vh] rounded-lg relative z-0"
      center={region?.coords ?? [49.989, 36.209]}
      zoom={10}
    >
      <TileLayer url="http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png" />
      <Marker position={region?.coords ?? [49.989, 36.209]} icon={ICON} />
    </MapContainer>
  )
}
