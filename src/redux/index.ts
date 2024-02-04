import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './slices/usersSlice'
import modalReducer from './slices/modalSlice'
import { combineReducers } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['usersState']
}

const rootReducer = combineReducers({
    usersState: usersReducer,
    modalState: modalReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(thunk)
})

export const persistor = persistStore(store)
