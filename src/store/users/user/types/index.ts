export interface initialStateUser
{
    data: User | null,
    loading: boolean,
    error: string | null
}

export interface User
{
    email: string;
    password?:string
    passwordConfirm?:string
    firstName:string
    lastName:string
    resorceId: number
    id:number
    phone?:string|null
}

