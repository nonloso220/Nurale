import { AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { QueryParams } from "../types";
import apiClient from "../../../../utils/helpers/apiClient";
import { API, BASE, SKILLS, V1 } from "../../../../utils/costants";

export const fetchSkills = createAsyncThunk(
    'fetch/skills',
    async (params: QueryParams | undefined, thunkAPI) => {
      try {
        const response = await apiClient.get<AxiosResponse>({
          url: `${BASE}${API}${V1}${SKILLS}`,
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