import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './slices/usersSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['usersState']
}

const rootReducer = combineReducers({
    usersState: usersReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(thunk)
})