import { createAsyncThunk } from "@reduxjs/toolkit";
import { API, BASE, CUSTOMERS, V1 } from "../../../../utils/costants";
import apiClient from "../../../../utils/helpers/apiClient";
import { AxiosResponse } from "axios";

export const deleteCustomer: any = createAsyncThunk(
    "Customer/delete",
    async (id: number, thunkAPI) =>
    {
        try
        {
            const response = await apiClient.delete<AxiosResponse>(
                {
                    url:`${BASE}${API}${V1}${CUSTOMERS}/${id}`,
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