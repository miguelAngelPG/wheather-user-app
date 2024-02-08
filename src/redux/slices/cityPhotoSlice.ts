import { urlPhotoCity } from '../../types/consts'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ICityPhoto } from '../../types/citiPhotoInterface'

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
    const response = await fetch(url,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'BxYsyb2mOmDF2lrVz3FkvRJj9m48WdaGXCDXdZ9eh88o0vvd2tQQg9CW'
        }
    })

    const data = await response.json()
    if (!response.ok) {
        throw data
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