import { rootApi } from '../index.api'
import { IAuthRequest, IAuthResponse } from '../../shared/interfaces'

export const authApi = rootApi.injectEndpoints({
	endpoints: build => ({
		signIn: build.mutation<string, IAuthRequest>({
			query: body => ({
				url: 'auth/login',
				method: 'POST',
				body
			}),
			transformResponse: (response: IAuthResponse) => response.token,
			transformErrorResponse: response => response.data as string
		})
	})
})

export const { useSignInMutation } = authApi
