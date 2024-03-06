import { configureStore } from '@reduxjs/toolkit'
import dictionarysReducer from '../slices/dictionarysSlice';

export const store = configureStore({
  reducer: {
    dictionarys: dictionarysReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
