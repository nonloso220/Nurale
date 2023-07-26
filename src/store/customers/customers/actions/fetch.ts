import { AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE, API, V1, CUSTOMERS } from "../../../../utils/costants";
import apiClient from "../../../../utils/helpers/apiClient";
import { QueryParams } from "../../../../utils/models";


export const fetchCustomers = createAsyncThunk(
    'fetch/customers',
    async (params: QueryParams | undefined, thunkAPI) => {
      try {
        const response = await apiClient.get<AxiosResponse>({
          url: `${BASE}${API}${V1}${CUSTOMERS}`,
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