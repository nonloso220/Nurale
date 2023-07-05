import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { addTokenCookies } from "../../../utils/auth";
import { BASE, API, V1, AUTH, LOGIN } from "../../../utils/costants";
import apiClient from "../../../utils/helpers/apiClient";
import { User } from "../../../utils/models";
import { UserLogin } from "../types";

interface LoginResponse{
    user:UserLogin
}
export const LoginUser=createAsyncThunk(
    'auth/Login',
    async(data:User)=>{
        try{
            const response=await apiClient.post<AxiosResponse>({
                url:`${BASE}${API}${V1}${AUTH}${LOGIN}`,
                body:{...data},
            })
            if(response.status===200 || response.status===201){
                const data:LoginResponse =response.data;
                addTokenCookies({
                    token:data.user.stsTokenManager.accessToken,
                    refreshToken: data.user.stsTokenManager.refreshToken,
                });
                return response.data;
            }
            return null
        }
        catch(error:any){
            return null;
        }
    }

);