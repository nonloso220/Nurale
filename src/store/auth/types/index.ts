export interface UserLogin{
    stsTokenManager:{
        accessToken:string
        refreshToken:string
    }
}
export interface initialStateAuth{
    data:[]
    loading:boolean
    error:null|string
}