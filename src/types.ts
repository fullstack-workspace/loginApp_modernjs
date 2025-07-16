export interface IRegisterUser {
    userName: string,
    email: string,
    password: string
}

export interface IRegisterUserResponse {
    success: boolean,
    statusCode: number,
    message: string,
}
