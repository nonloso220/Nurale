import { createAsyncThunk } from "@reduxjs/toolkit";
import { API, BASE, SUPPLIERS, V1 } from "../../../../utils/costants";
import apiClient from "../../../../utils/helpers/apiClient";
import { AxiosResponse } from "axios";

export const deleteSupplier: any = createAsyncThunk(
    "supplier/delete",
    async (id: number, thunkAPI) =>
    {
        try
        {
            const response = await apiClient.delete<AxiosResponse>(
                {
                    url:`${BASE}${API}${V1}${SUPPLIERS}/${id}`,
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