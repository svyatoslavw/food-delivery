import { type LatLngTuple } from "leaflet"

interface IRegion {
  value: string
  label: string
  region: string
  coords: LatLngTuple
}

export const REGIONS: IRegion[] = [
  {
    value: "center",
    label: "Center",
    region: "Kharkiv",
    coords: [49.989, 36.209]
  },
  {
    value: "kyiv-district",
    label: "Kyiv district",
    region: "Kharkiv",
    coords: [50.044, 36.27]
  },
  {
    value: "shevchenkivskyi-district",
    label: "Shevchenkivskyi district",
    region: "Kharkiv",
    coords: [50.037, 36.139]
  },
  {
    value: "Kholodnogorskyi-district",
    label: "Kholodnogorskyi district",
    region: "Kharkiv",
    coords: [50.008, 36.076]
  },
  {
    value: "novobavarsky-district",
    label: "Novobavarsky district",
    region: "Kharkiv",
    coords: [49.95, 36.128]
  },
  {
    value: "osnovyanskyi-district",
    label: "Osnovyanskyi district",
    region: "Kharkiv",
    coords: [49.931, 36.161]
  },
  {
    value: "slobodskyi-district",
    label: "Slobodskyi district",
    region: "Kharkiv",
    coords: [49.949, 36.248]
  },
  {
    value: "nemyshlyanskyi-district",
    label: "Nemyshlyanskyi district",
    region: "Kharkiv",
    coords: [49.967, 36.228]
  },
  {
    value: "Industrialnyi district",
    label: "Industrialnyi district",
    region: "Kharkiv",
    coords: [49.93, 36.306]
  }
]
