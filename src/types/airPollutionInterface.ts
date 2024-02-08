interface List {
    dt:         number
    main:       {aqi: number}
    components: {
        co: number
        no: number
        no2: number
        o3: number
        so2: number
        pm2_5: number
        pm10: number
        nh3: number

    }
}

export interface IAirPollution {
    coor:     {
        lat: number
        lon: number
    }
    list: List[]
}
