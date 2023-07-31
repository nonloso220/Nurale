import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import apiClient from "../../../../utils/helpers/apiClient";
import { API, BASE, RESOURCE, V1 } from "../../../../utils/costants";
import { Resource } from "../types";

export const createResource: any = createAsyncThunk(
    "resource/create",
    async (resource:Resource, thunkAPI) =>
    {
        try
        {
            const response = await apiClient.post<AxiosResponse>({
                url: `${BASE}${API}${V1}${RESOURCE}`,
                body: resource
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