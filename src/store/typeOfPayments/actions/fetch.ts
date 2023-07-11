import { AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { QueryParams } from "../types";
import { BASE, API, V1, TYPEOFPAYMENTS } from "../../../utils/costants";
import apiClient from "../../../utils/helpers/apiClient";

export const fetchTypeOfPayments = createAsyncThunk(
    'fetch/users',
    async (params: QueryParams | undefined, thunkAPI) => {
      try {
        const response = await apiClient.get<AxiosResponse>({
          url: `${BASE}${API}${V1}${TYPEOFPAYMENTS}`,
          params:params
        });
  
        if (response.status === 200  || response.status === 201) {
          return response.data;
        }
  
        return thunkAPI.rejectWithValue("error");
      } catch (error: any) {
        return thunkAPI.rejectWithValue("error");
      }
    }
  );