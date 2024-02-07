export const types = {
    new: 'new',
    edit: 'edit'
}

export interface IUser {
    name: string
    lat: number
    long: number
}

export interface Properties {
    mapbox_id?: string
    wikidata?: string
    short_code?: string
    foursquare?: string
    landmark?: boolean
    category?: string
    maki?: string
}

export interface Geometry {
    type: string
    coordinates: number[]
}

export interface Context {
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