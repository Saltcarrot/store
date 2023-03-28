import { createSlice } from '@reduxjs/toolkit'
import { authApi } from './auth.api'
import { IAuth } from '../../shared/interfaces'

interface IAuthState {
	isLoading: boolean
	error: string | null
	user: IAuth | null
}

const initialState: IAuthState = {
	isLoading: false,
	error: null,
	user: null
}

export const authSlice = createSlice({
	name: '[Slice | Auth]',
	initialState,
	reducers: {
		signOut: state => {
			state.user = null
		}
	},
	extraReducers: builder => {
		builder
			.addMatcher(authApi.endpoints.signIn.matchPending, state => {
				state.isLoading = true
			})
			.addMatcher(
				authApi.endpoints.signIn.matchFulfilled,
				(
					state,
					{
						payload,
						meta: {
							arg: {
								originalArgs: { username, password }
							}
						}
					}
				) => {
					state.isLoading = false
					state.user = {
						token: payload,
						username: username,
						password: password
					}
				}
			)
			.addMatcher(
				authApi.endpoints.signIn.matchRejected,
				(state, { payload }) => {
					state.isLoading = false
					state.error = payload as unknown as string
				}
			)
	}
})

export const authReducer = authSlice.reducer
export const authActions = authSlice.actions
