import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../../../utils/helpers/apiClient";
import { API, BASE, CUSTOMERS, V1 } from "../../../../utils/costants";
import { AxiosResponse } from "axios";
import { Customer } from "../types";

export const updateCustomer: any = createAsyncThunk(
    "Customer/update",
    async (Customer:Customer, thunkAPI) =>
    {
        try
        {   
            const body={
                name:Customer.name,
                typeOfPaymentId:Customer.typeOfPaymentId,
                note:Customer.note
            }
            const response:any = await apiClient.patch<AxiosResponse>(
            {
                url:`${BASE}${API}${V1}${CUSTOMERS}/${Customer?.id}`,
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