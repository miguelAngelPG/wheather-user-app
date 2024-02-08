export enum Mode {
    New = 'new',
    Edit = 'edit',
    WithoutStatus = 'withoutStatus'
}

export enum Layer {
    Clouds_new = 'clouds_new',
    Precipitation_new = 'precipitation_new',
    Pressure_new = 'pressure_new',
    Wind_new = 'wind_new',
    Temp_new = 'temp_new',
}

export interface AqiText {
    [key: number]: {
        title: string
        color: string
        description: string
        titleEn: string
    }
}