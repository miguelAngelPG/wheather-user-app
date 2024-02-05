import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IUserState {
    name: string
    lat: number
    long: number
}
interface ICurrentUserState {
    currentUserState: IUserState
}

const initialState: IUserState = {
    name: '',
    lat: 0,
    long: 0,
}

interface IState {
    [key: string]: string | number
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        setLat: (state, action: PayloadAction<number>) => {
            state.lat = action.payload
        },
        setLong: (state, action: PayloadAction<number>) => {
            state.long = action.payload
        },
        reset: (state) => {
            state.name = ''
            state.lat = 0
            state.long = 0
        },
        changeValue(state: IState, action: PayloadAction<{ name: keyof IUserState, value: string | number }>) {
            const { name, value } = action.payload
            state[name] = value as string | number
        },
    },
})

export const { setLat, setLong, setName, reset, changeValue } = userSlice.actions
export const selectCurrentUser = (state: ICurrentUserState) => state.currentUserState
export default userSlice.reducer