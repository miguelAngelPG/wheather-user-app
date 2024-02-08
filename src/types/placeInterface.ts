interface Properties {
    mapbox_id?: string
    wikidata?: string
    short_code?: string
    foursquare?: string
    landmark?: boolean
    category?: string
    maki?: string
}

interface Geometry {
    type: string
    coordinates: number[]
}

interface Context {
    id: string
    mapbox_id: string
    wikidata?: string
    short_code?: string
    text: string
}

export interface IPlace {
    id: string
    type: string
    place_type: string[]
    relevance: number
    properties: Properties
    text: string
    place_name: string
    bbox?: number[]
    center: number[]
    geometry: Geometry
    context: Context[]
  }