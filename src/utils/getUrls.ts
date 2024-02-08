
/**
 * Returns the URL for the current weather API endpoint.
 * @param lat - The latitude of the location.
 * @param long - The longitude of the location.
 * @param apiKey - The API key for accessing the weather data.
 * @returns The URL for the current weather API endpoint.
 */
export const urlCurrentWeather = (lat: number, long: number, apiKey: string): string => {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric&lang=es`
}

/**
 * Returns the URL for the forecast API endpoint.
 * @param lat - The latitude of the location.
 * @param long - The longitude of the location.
 * @param apiKey - The API key for accessing the weather data.
 * @returns The URL for the forecast API endpoint.
 */
export const urlForecast = (lat: number, long: number, apiKey: string): string => {
    return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric&lang=es`
}

/**
 * Returns the URL for the air pollution API endpoint.
 * @param lat - The latitude of the location.
 * @param long - The longitude of the location.
 * @param apiKey - The API key for accessing the weather data.
 * @returns The URL for the air pollution API endpoint.
 */
export const urlAirPollution = (lat: number, long: number, apiKey: string): string => {
    return `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=${apiKey}`
}

/**
 * Returns the URL for retrieving city information.
 * @param lat - The latitude of the location.
 * @param long - The longitude of the location.
 * @returns The URL for retrieving city information.
 */
export const urlInfoCity = (lat: number, long: number, apiKey: string): string => {
    return `https://api.mapbox.com/search/searchbox/v1/reverse?longitude=${ long }&latitude=${ lat }&language=es&access_token=${ apiKey }`
}

/**
 * Returns the URL for retrieving city photos.
 * @param city - The name of the city.
 * @returns The URL for retrieving city photos.
 */
export const urlPhotoCity = (city: string): string => {
    return `https://api.pexels.com/v1/search?query=${ city }&per_page=3`
}

/**
 * Returns the URL for searching places.
 * @param query - The query to search for.
 * @param apiKey - The API key for accessing the places data.
 * @returns The URL for searching places.
 */
export const urlSearchPlaces = (query: string, apiKey: string): string => {
    return `https://api.mapbox.com/geocoding/v5/mapbox.places/${ query }.json?access_token=${ apiKey }`
}