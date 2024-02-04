import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
    name: string
    lat: number
    long: number
}

const initialState: UserState = {
    name: '',
    lat: 0,
    long: 0,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<UserState>) => {
            state.name = action.payload.name
            state.lat = action.payload.lat
            state.long = action.payload.long
        },
    },
})

export const { addUser } = userSlice.actions

export default userSlice.reducer