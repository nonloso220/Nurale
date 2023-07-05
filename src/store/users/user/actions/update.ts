import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../types";
import apiClient from "../../../../utils/helpers/apiClient";
import { API, BASE, USERS, V1 } from "../../../../utils/costants";

export const updateUser: any = createAsyncThunk(
    "user/update",
    async (user:User, thunkAPI) =>
    {
        try
        {   
            const body={
                firstName: user.firstName,
                lastName: user.lastName,
                phone: user.phone,
                resourceId: 12,
                hasDarkTheme: false
            }
            const response:any = await apiClient.patch(
            {
                url:`${BASE}${API}${V1}${USERS}/${user.id}`,
                body:body
            });
            if (response.status === 200  || response.status === 201) {
                return response.data;
              }
           
            return thunkAPI.rejectWithValue("error");

        }
        catch(error)
        {
            return thunkAPI.rejectWithValue("error");
        }
    }

) 