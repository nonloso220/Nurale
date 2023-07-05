import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "..";
import { API, BASE, USERS, V1 } from "../../../../utils/costants";
import { AxiosResponse } from "axios";
import apiClient from "../../../../utils/helpers/apiClient";

export const createUser: any = createAsyncThunk(
    "user/create",
    async (user:User, thunkAPI) =>
    {
        try
        {
            const response = await apiClient.post<AxiosResponse>({
                url: `${BASE}${API}${V1}${USERS}`,
                body: user
              });
              if (response.status === 200  || response.status === 201) {
                return response.data;
              }

            return thunkAPI.rejectWithValue("error");
        }
        catch(error)
        {
            return error;
        }
    }

) 