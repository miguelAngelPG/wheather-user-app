import { createSelector, createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
interface IUser {
    id: string
    name: string
    lat: string
    long: string
}

interface IUserState { usersState: IUser[]}

const initialState: IUser[] = [
    {id:'6f48bd2f-4e61-4fa3-b271-9d9480006a71', name:'Carlos', lat:'16.86805', long:'-99.894018'},
    { id:'c53994dd-f314-46fa-b2dd-dbba1fb5bad3', name:'Miguel', lat:'21.161785', long:'-86.851047'},
    { id:'6f856ada-7ea0-4e97-ab17-721323db1c25', name:'Maria', lat:'48.8534951', long:'2.3483915'},
    { id:'94f6b1ae-7526-4921-bff7-385d482515ca', name:'Mixton', lat:'28.9444647055242', long:'-82.033629763236'},
    { id:'ca7de02a-0414-4eea-8848-d398b5860ee2', name:'Karla', lat:'43.653482', long:'-79.383935'},
    { id:'cd428ef0-812d-49e2-82d3-43167a71aa17', name:'Kevin', lat:'25.774173', long:'-80.19362'}
]

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const user: IUser = {
                id: uuidv4(),
                name: action.payload.name,
                lat: action.payload.lat,
                long: action.payload.long,
            }
            state.push(user)
        },
        removeUser: (state, action) => {
            return state.filter(user => user.id !== action.payload)
        },
        updateUser: (state, action) => {
            const { id, name, lat, long } = action.payload
            const user = state.find(user => user.id === id)
            if (user) {
                user.name = name
                user.lat = lat
                user.long = long
            }
        },
    },
})

export const { addUser, removeUser, updateUser } = usersSlice.actions
export const selectUsers = (state: IUserState): IUser[] => state.usersState
export const selectUserById = createSelector(
    [
        state => state.usersState,
        (_state, id) => id,
    ],
    (users: IUser[], id: string) => users.find((user: IUser) => user.id.toString() === id.toString())
)
export default usersSlice.reducer
