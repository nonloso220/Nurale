import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../../../utils/helpers/apiClient";
import { API, BASE, TYPEOFPAYMENTS, V1 } from "../../../../utils/costants";
import { AxiosResponse } from "axios";
import { TypeOfPayment } from "..";

export const updateTypeOfPayments: any = createAsyncThunk(
    "TypeOfPayments/update",
    async (typeOfPayment:TypeOfPayment, thunkAPI) =>
    {
        try
        {   
            const body={
                name:typeOfPayment.name,
                daysBetweenPayments: typeOfPayment.daysBetweenPayments,
                daysOffsetPayments:typeOfPayment.daysOffsetPayments,
                daysToFirstPayment:typeOfPayment.daysToFirstPayment,
                movePaymentsToTheEndOfMonth:typeOfPayment.movePaymentsToTheEndOfMonth,
                numberOfPayments:typeOfPayment.numberOfPayments,
                note: typeOfPayment.note,
            }
            const response:any = await apiClient.patch<AxiosResponse>(
            {
                url:`${BASE}${API}${V1}${TYPEOFPAYMENTS}/${typeOfPayment?.id}`,
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