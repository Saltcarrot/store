import { configureStore } from '@reduxjs/toolkit'
import { rootApi } from './index.api'
import { authReducer } from './auth'

export const store = configureStore({
	reducer: { [rootApi.reducerPath]: rootApi.reducer, auth: authReducer },
	devTools: process.env.NODE_ENV === 'development',
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(rootApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
