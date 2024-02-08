import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './slices/usersSlice'
import modalReducer from './slices/modalSlice'
import currentUserReducer from './slices/currentUserSlice'
import currentWeatherReducer from './slices/currentWeatherSlice'
import airPollutionReducer from './slices/airPollutionSlice'
import cityInfoReducer from './slices/cityInfoSlice'
import cityPhotoReducer from './slices/cityPhotoSlice'
import forecastDaysReducer from './slices/forecastDaySlice'
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
    modalState: modalReducer,
    currentUserState: currentUserReducer,
    currentWeatherState: currentWeatherReducer,
    airPollutionState: airPollutionReducer,
    cityInfoState: cityInfoReducer,
    cityPhotoState: cityPhotoReducer,
    forecastDaysState: forecastDaysReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(thunk)
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const persistor = persistStore(store)
