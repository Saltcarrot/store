export interface IAuthRequest {
	username: string
	password: string
}

export interface IAuthResponse {
	token: string
}

export interface IAuth {
	username: string
	password: string
	token: string
}
