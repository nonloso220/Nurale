import { createAsyncThunk } from "@reduxjs/toolkit";
import { API, BASE, TYPEOFPAYMENTS, V1 } from "../../../../utils/costants";
import { AxiosResponse } from "axios";
import apiClient from "../../../../utils/helpers/apiClient";
import { TypeOfPayment } from "../types";

export const createTypeOfPayment: any = createAsyncThunk(
    "TypeOfPayment/create",
    async (typeOfPayment:TypeOfPayment, thunkAPI) =>
    {
        try
        {
            const response = await apiClient.post<AxiosResponse>({
                url: `${BASE}${API}${V1}${TYPEOFPAYMENTS}`,
                body: typeOfPayment
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