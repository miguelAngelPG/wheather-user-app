
interface IPhoto {
    id: number
    width: number
    height: number
    url: string
    photographer: string
    photographer_url: string
    src: {
        original: string
        large2x: string
        large: string
        medium: string
        small: string
        portrait: string
        landscape: string
        tiny: string
    }
    alt: string
}

export interface ICityPhoto {
    per_page: number
    page: number
    photos: IPhoto[]
    next_page: string
}