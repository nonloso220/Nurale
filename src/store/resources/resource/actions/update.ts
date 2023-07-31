import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../../../utils/helpers/apiClient";
import { AxiosResponse } from "axios";
import { API, BASE, RESOURCE, V1 } from "../../../../utils/costants";
import { Resource } from "../types";

export const updateResource: any = createAsyncThunk(
    "resource/update",
    async (resource:Resource, thunkAPI) =>
    {
        try
        {   const body={
                // name: supplier.name,
                // note: supplier.note,
                // typeOfPaymentId: supplier.typeOfPaymentId
            }
            const response:any = await apiClient.patch<AxiosResponse>(
            {
                url:`${BASE}${API}${V1}${RESOURCE}/${resource?.id}`,
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