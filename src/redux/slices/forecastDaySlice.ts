import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { IForecast } from  '@/types/forecastInterface'
import { urlForecast } from '@/utils/getUrls'

interface IState {
    isLoading: boolean
    data: IForecast | null
    error: boolean
}

const initialState = {
    isLoading: false,
    data: null,
    error: false
}

export const fetchForecastDays = createAsyncThunk('fetchForecastDays', async ({ lat, long }: { lat: number, long: number }) => {
    const url = urlForecast(lat, long, import.meta.env.VITE_OPENWEATHERMAP_API_KEY)
    const response = await fetch(url)
    const data = await response.json()
    if (!response.ok) {
        throw data
    }
    return data
})

const forecastDaysSlice = createSlice({
    name: 'forecastDays',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchForecastDays.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchForecastDays.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchForecastDays.rejected, (state) => {
            state.isLoading = false
            state.error = true
        })
    }

})

export const selectForecastDays = (state: { forecastDaysState: IState }) => state.forecastDaysState
export default forecastDaysSlice.reducer