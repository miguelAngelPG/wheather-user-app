
interface Geometry {
    coordinates: number[]
    type: string
}

interface Country {
    name: string
    country_code: string
    country_code_alpha_3: string
}

interface Postcode {
    name: string
}

interface Place {
    name: string
    region_code?: string
}

interface Neighborhood {
    name: string
}

interface Address {
    name: string
    address_number: string
    street_name: string
}

interface Street {
    name: string
}

interface RoutablePoint {
    name: string
    latitude: number
    longitude: number
}

interface Coordinates {
    latitude: number
    longitude: number
    routable_points: RoutablePoint[]
}

interface ExternalIds {
    foursquare: string
}

interface Metadata {
    phone: string
    website: string
}

interface Context {
    country: Country
    postcode: Postcode
    place?: Place
    neighborhood: Neighborhood
    address: Address
    street: Street
    region?: Place
    locality?: Place
}

interface Properties {
    name: string
    mapbox_id: string
    feature_type: string
    address: string
    full_address: string
    place_formatted: string
    context: Context
    coordinates: Coordinates
    language: string
    maki: string
    poi_category: []
    poi_category_ids: []
    external_ids: ExternalIds
    metadata: Metadata
}

export interface Features {
    getDate: Geometry
    properties: Properties
    type: string
}

export interface ICityInfo {
    type: string
    features: Features[]
    attribution: string
}
