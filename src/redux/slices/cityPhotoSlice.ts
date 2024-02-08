import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { ICityPhoto } from '@/types/citiPhotoInterface'
import { urlPhotoCity } from '@/utils/getUrls'

interface IState {
    isLoading: boolean
    data: ICityPhoto | null
    error: boolean
}

const initialState = {
    isLoading: false,
    data: null,
    error: false
}

export const fetchCityPhoto = createAsyncThunk('fetchCityPhoto', async ({ city }: { city: string }) => {
    const url = urlPhotoCity(city)
    console.log(url)
    const response = await fetch(url,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': import.meta.env.VITE_PEXELS_API_KEY
        }
    })

    const data = await response.json()
    if (!response.ok) {
        throw null
    }

    return data
})

const cityPhotoSlice = createSlice({
    name: 'cityPhoto',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCityPhoto.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchCityPhoto.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = false
            state.data = action.payload
        })
        builder.addCase(fetchCityPhoto.rejected, (state) => {
            state.isLoading = false
            state.error = true
        })
    }

})

export const selectCityPhoto = (state: { cityPhotoState: IState }) => state.cityPhotoState
export default cityPhotoSlice.reducer