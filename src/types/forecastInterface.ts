interface Clouds {
    all: number
}

interface Wind {
    speed: number
    deg:   number
    gust:  number
}

interface Weather {
    id:          number
    main:        string
    description: string
    icon:        string
}

interface MainClass {
    temp:       number
    feels_like: number
    temp_min:   number
    temp_max:   number
    pressure:   number
    sea_level:  number
    grnd_level: number
    humidity:   number
    temp_kf:    number
}

interface Rain {
    '3h': number
}

interface Sys {
    pod: string
}

interface List {
    dt:         number
    main:       MainClass
    weather:    Weather[]
    clouds:     Clouds
    wind:       Wind
    visibility: number
    pop:        number
    sys:        Sys
    dt_txt:     Date
    rain?:      Rain
}

interface Coord {
    lat: number
    lon: number
}

interface City {
    id:         number
    name:       string
    coord:      Coord
    country:    string
    population: number
    timezone:   number
    sunrise:    number
    sunset:     number
}

export interface IForecast {
    cod:     string
    message: number
    cnt:     number
    list:    List[]
    city:    City
}
