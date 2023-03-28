import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const rootApi = createApi({
	reducerPath: 'API',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://fakestoreapi.com/'
	}),
	endpoints: () => ({})
})
