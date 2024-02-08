export interface AqiText {
    [key: number]: {
        title: string
        color: string
        description: string
    }
}

export const weekDayNames = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado'
]

export const monthNames = [
    'Ene',
    'Feb',
    'Mar',
    'Abr',
    'May',
    'Jun',
    'Jul',
    'Ago',
    'Sep',
    'Oct',
    'Nov',
    'Dic'
]

export const urlCurrentWeather = (lat: number, long: number, apiKey: string): string => {
    //  api.openweathermap.org/data/2.5/forecast?lat=21.1743&lon=-86.8466&appid=064a38154d4c70027d24773c077a583e&units=metric&lang=es
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric&lang=es`
}

export const urlForecast = (lat: number, long: number, apiKey: string): string => {
    //  api.openweathermap.org/data/2.5/forecast?lat=21.1743&lon=-86.8466&appid=064a38154d4c70027d24773c077a583e&units=metric&lang=es
    return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric&lang=es`
}

export const urlAirPollution = (lat: number, long: number, apiKey: string): string => {
    // https://api.openweathermap.org/data/2.5/air_pollution?lat=21.17429&lon=-86.84656&appid=064a38154d4c70027d24773c077a583e
    return `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=${apiKey}`
}

export const urlInfoCity = (lat: number, long: number): string => {
    // "https://api.mapbox.com/search/searchbox/v1/reverse?longitude=-118.471383&latitude=34.023653&language=es&access_token=pk.eyJ1IjoibWlja2V5cGc5MjUiLCJhIjoiY2t6eWc0enQxMGIzMDJ4cXY5aWRwMWJqOCJ9.TWnuY8rLxU-3uYe0tctb2A"
    return `https://api.mapbox.com/search/searchbox/v1/reverse?longitude=${ long }&latitude=${ lat }&language=es&access_token=pk.eyJ1IjoibWlja2V5cGc5MjUiLCJhIjoiY2t6eWc0enQxMGIzMDJ4cXY5aWRwMWJqOCJ9.TWnuY8rLxU-3uYe0tctb2A`
}

export const urlPhotoCity = (city: string): string => {
    // https://api.pexels.com/v1/search?query=cancun&per_page=3
    return `https://api.pexels.com/v1/search?query=${ city }&per_page=3`
}

/**
 *
 * @param dateUnix Unix date in seconds
 * @param timezone Timezone shift from UTC in seconds
 * @returns Date in format "WeekDay 10, Month"
 */
export const getDate = (dateUnix: number, timezone: number): string => {
    const date = new Date((dateUnix + timezone) * 1000)
    const weekDayName = weekDayNames[date.getUTCDay()]
    const monthName = monthNames[date.getUTCMonth()]

    return `${weekDayName} ${date.getUTCDate()}, ${monthName}. ${date.getUTCFullYear()}`
}

/**
 *
 * @param dateUnix
 * @param timezone
 * @returns Date in format "10 Month"
 */
export const getSimpleDate = (dateUnix: number, timezone: number): string => {
    const date = new Date((dateUnix + timezone) * 1000)
    const monthName = monthNames[date.getUTCMonth()]

    return `${monthName} ${date.getUTCDate()} `
}

/**
 *
 * @param dateUnix Unix date in seconds
 * @param timezone Timezone shift from UTC in seconds
 * @returns Weekday name
 */
export const getDay = (dateUnix: number, timezone: number): string => {
    const date = new Date((dateUnix + timezone) * 1000)
    return weekDayNames[date.getUTCDay()]
}

/**
 *
 * @param timeUnix Unix time in seconds
 * @param timezone Timezone shift from UTC in seconds
 * @returns Time in format "HH:MM AM/PM"
 */
export const getTime = (timeUnix: number, timezone: number): string => {
    const date = new Date((timeUnix + timezone) * 1000)
    const hours = date.getUTCHours()
    const minutes = date.getUTCMinutes()
    const period = hours < 12 ? 'AM' : 'PM'
    return `${ hours % 12 || 12 }:${ minutes < 10 ? `0${minutes}` : minutes } ${period}`
}

/**
 *
 * @param mps Speed in meters per second
 * @returns Speed in kilometers per hour
 */
export const mps_to_kmph = (mps: number): number => {
    return mps * 3.6
}

export const getTemp = (temp: number) => {
    return `${ Math.round(temp) }°C`
}

export const getVisibity = (visibility: number) => {
    return `${visibility / 1000} km`
}

export const getPressure = (pressure: number) => {
    return `${ pressure } hPa`
}

export const getHumidity = (humidity: number) => {
    return `${humidity}%`
}

export const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export const aqiText: AqiText = {
    1: {
        title: 'Good',
        color: 'green',
        description: 'Air quality is considered satisfactory, and air pollution poses little or no risk.'
    },
    2: {
        title: 'Fair',
        color: 'yellow',
        description: 'Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.'
    },
    3: {
        title: 'Moderate',
        color: 'orange',
        description: 'Members of sensitive groups may experience health effects. The general public is not likely to be affected.'
    },
    4: {
        title: 'Poor',
        color: 'red',
        description: 'Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.'
    },
    5: {
        title: 'Very Poor',
        color: 'purple',
        description: 'Health alert: everyone may experience more serious health effects.'
    },
}