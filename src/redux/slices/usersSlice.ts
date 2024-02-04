import { createSlice } from '@reduxjs/toolkit'

interface IUser {
    id: number
    name: string
    lat: number
    long: number
}

interface IUserState { usersState: IUser[]}

const initialState: IUser[] = [
    { id: 1, name: 'Snow', lat: 76, long: 35 },
    { id: 2, name: 'Lannister', lat: 54, long: 42 },
    { id: 3, name: 'Lannister', lat: 76, long: 45 },
    { id: 4, name: 'Stark', lat: 12, long: 16 },
    { id: 5, name: 'Targaryen', lat: 93, long: 55 },
    { id: 6, name: 'Melisandre', lat: 24, long: 150 },
    { id: 7, name: 'Clifford', lat: 84, long: 44 },
    { id: 8, name: 'Frances', lat: 10, long: 36 },
    { id: 9, name: 'Roxie', lat: 73, long: 65 },
]

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    },
})

export const selectUsers = (state: IUserState): IUser[] => state.usersState
export default usersSlice.reducer