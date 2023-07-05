import { createAsyncThunk } from "@reduxjs/toolkit";
import { API, BASE, USERS, V1 } from "../../../../utils/costants";
import apiClient from "../../../../utils/helpers/apiClient";
import { AxiosResponse } from "axios";

export const deleteUser: any = createAsyncThunk(
    "user/delete",
    async (id: number, thunkAPI) =>
    {
        try
        {
            const response = await apiClient.delete<AxiosResponse>(
                {
                    url:`${BASE}${API}${V1}${USERS}/${id}`,
                }
            );

            if (response.status === 200  || response.status === 201) {
                return response;
            }
            return thunkAPI.rejectWithValue("error");
        }
        catch(error)
        {
            return thunkAPI.rejectWithValue("error");
        }
    }

) 