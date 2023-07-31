import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../../../utils/helpers/apiClient";
import { API, BASE,SUPPLIERS, V1 } from "../../../../utils/costants";
import { AxiosResponse } from "axios";
import { Supplier } from "../types";

export const updateSupplier: any = createAsyncThunk(
    "supplier/update",
    async (supplier:Supplier, thunkAPI) =>
    {
        try
        {   const body={
                name: supplier.name,
                note: supplier.note,
                typeOfPaymentId: supplier.typeOfPaymentId
            }
            const response:any = await apiClient.patch<AxiosResponse>(
            {
                url:`${BASE}${API}${V1}${SUPPLIERS}/${supplier?.id}`,
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