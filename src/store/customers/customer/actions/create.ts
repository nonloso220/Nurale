import { createAsyncThunk } from "@reduxjs/toolkit";
import { API, BASE, CUSTOMERS, V1 } from "../../../../utils/costants";
import { AxiosResponse } from "axios";
import apiClient from "../../../../utils/helpers/apiClient";
import { Customer } from "../types";

export const createCustomer: any = createAsyncThunk(
    "Customer/create",
    async (customer:Customer, thunkAPI) =>
    {
        try
        {
            const response = await apiClient.post<AxiosResponse>({
                url: `${BASE}${API}${V1}${CUSTOMERS}`,
                body: customer
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