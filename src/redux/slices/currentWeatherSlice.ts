import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { ICurrentWeather } from  '@/types/currentWeatherInterface'
import { urlCurrentWeather } from '@/utils/getUrls'

interface IState {
    isLoading: boolean
    data: ICurrentWeather | null
    error: boolean
}

const initialState = {
    isLoading: false,
    data: null,
    error: false
}

export const fetchCurrentWeather = createAsyncThunk('fetchCurrentWeather', async ({ lat, long }: { lat: number, long: number }) => {
    const url = urlCurrentWeather(lat, long, import.meta.env.OPENWEATHERMAP_API_KEY)
    const response = await fetch(url)
    const data = await response.json()
    if (!response.ok) {
        throw data
    }

    return data
})

const currentWeatherSlice = createSlice({
    name: 'currentWeather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCurrentWeather.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchCurrentWeather.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchCurrentWeather.rejected, (state) => {
            state.isLoading = false
            state.error = true
        })
    }

})

export const selectName = (state: { currentWeatherState: IState }) => state.currentWeatherState.data?.name
export const selectCurrentWeather = (state: { currentWeatherState: IState }) => state.currentWeatherState
export default currentWeatherSlice.reducer