import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../../../utils/helpers/apiClient";
import { AxiosResponse } from "axios";
import { API, BASE, RESOURCE, V1 } from "../../../../utils/costants";

export const deleteResource: any = createAsyncThunk(
    "resource/delete",
    async (id: number, thunkAPI) =>
    {
        try
        {
            const response = await apiClient.delete<AxiosResponse>(
                {
                    url:`${BASE}${API}${V1}${RESOURCE}/${id}`,
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