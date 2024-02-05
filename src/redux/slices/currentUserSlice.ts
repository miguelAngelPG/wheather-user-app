import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CurrentUserState {
    name: string
    lat: number
    long: number
}

const initialState: CurrentUserState = {
    name: '',
    lat: 0,
    long: 0,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<CurrentUserState>) => {
            state.name = action.payload.name
            state.lat = action.payload.lat
            state.long = action.payload.long
        },
    },
})

export const { addUser } = userSlice.actions

export default userSlice.reducer