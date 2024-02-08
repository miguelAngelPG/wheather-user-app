import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { ICityInfo } from '@/types/cityInterface'
import { urlInfoCity } from '@/utils/getUrls'

interface IState {
    isLoading: boolean
    data: ICityInfo | null
    error: boolean
}

const initialState = {
    isLoading: false,
    data: null,
    error: false
}

export const fetchCityInfo = createAsyncThunk('fetchCityInfo', async ({ lat, long }: { lat: number, long: number }) => {
    const url = urlInfoCity(lat, long)
    const response = await fetch(url)
    const data = await response.json()
    if (!response.ok) {
        throw data
    }
    return data
})

const airPollutionSlice = createSlice({
    name: 'cityInfo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCityInfo.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchCityInfo.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchCityInfo.rejected, (state) => {
            state.isLoading = false
            state.error = true
        })
    }

})

export const selectCityInfo = (state: { cityInfoState: IState }) => state.cityInfoState
export default airPollutionSlice.reducer