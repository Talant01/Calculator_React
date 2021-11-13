import {configureStore} from '@reduxjs/toolkit'
import basicSlice from './slices/basicSlice'
import currencySlice from './slices/currencySlice'

const store = configureStore({
    reducer: {
        basic: basicSlice.reducer,
        currency: currencySlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store