import { createAsyncThunk } from "@reduxjs/toolkit";
import { API, BASE, SUPPLIERS, V1 } from "../../../../utils/costants";
import { AxiosResponse } from "axios";
import apiClient from "../../../../utils/helpers/apiClient";
import { Supplier } from "../types";

export const createSupplier: any = createAsyncThunk(
    "supplier/create",
    async (supplier:Supplier, thunkAPI) =>
    {
        try
        {
            const response = await apiClient.post<AxiosResponse>({
                url: `${BASE}${API}${V1}${SUPPLIERS}`,
                body: supplier
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