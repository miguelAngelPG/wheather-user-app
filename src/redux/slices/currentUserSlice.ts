import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IUserState {
    id: string
    name: string
    lat: string
    long: string
}
interface ICurrentUserState {
    currentUserState: IUserState
}

const initialState: IUserState = {
    id: '',
    name: '',
    lat: '',
    long: '',
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
        setLat: (state, action: PayloadAction<string>) => {
            state.lat = action.payload
        },
        setLong: (state, action: PayloadAction<string>) => {
            state.long = action.payload
        },
        resetUser: (state) => {
            state.name = ''
            state.lat = ''
            state.long = ''
        },
        changeValue(state: IState, action: PayloadAction<{ name: keyof IUserState, value: string | number }>) {
            const { name, value } = action.payload
            state[name] = value as string | number
        },
        loadUser(state, action: PayloadAction<IUserState>) {
            const { id, name, lat, long } = action.payload
            state.id = id
            state.name = name
            state.lat = lat
            state.long = long
        }
    },
})

export const { setLat, setLong, setName, resetUser, changeValue, loadUser } = userSlice.actions
export const selectCurrentUser = (state: ICurrentUserState) => state.currentUserState
export default userSlice.reducer