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