import { AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../../../utils/helpers/apiClient";
import { API, BASE, SUPPLIERS, V1 } from "../../../../utils/costants";
import { QueryParams } from "../../../../utils/models";

export const fetchSuppliers = createAsyncThunk(
    'fetch/suppliers',
    async (params: QueryParams | undefined, thunkAPI) => {
      try {
        const response = await apiClient.get<AxiosResponse>({
          url: `${BASE}${API}${V1}${SUPPLIERS}`,
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