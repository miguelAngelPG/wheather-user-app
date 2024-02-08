import { IAirPollution } from '@/types/airPollutionInterface'
import { urlAirPollution } from '@/utils/getUrls'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface IState {
    isLoading: boolean
    data: IAirPollution | null
    error: boolean
}

const initialState = {
    isLoading: false,
    data: null,
    error: false
}

export const fetchAirPollution = createAsyncThunk('fetchAirPollution', async ({ lat, long }: { lat: number, long: number }) => {
    const url = urlAirPollution(lat, long, import.meta.env.VITE_OPENWEATHERMAP_API_KEY as string)
    const response = await fetch(url)
    const data = await response.json()
    if (!response.ok) {
        throw data
    }
    return data
})

const airPollutionSlice = createSlice({
    name: 'airPollution',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAirPollution.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchAirPollution.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchAirPollution.rejected, (state) => {
            state.isLoading = false
            state.error = true
        })
    }

})

export const selectAirPollution = (state: { airPollutionState: IState }) => state.airPollutionState
export default airPollutionSlice.reducer