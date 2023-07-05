import { createAsyncThunk } from "@reduxjs/toolkit";
import { Skill } from "..";
import { API, BASE, SKILLS, V1 } from "../../../../utils/costants";
import { AxiosResponse } from "axios";
import apiClient from "../../../../utils/helpers/apiClient";

export const createSkill: any = createAsyncThunk(
    "skill/create",
    async (skill:Skill, thunkAPI) =>
    {
        try
        {
            const response = await apiClient.post<AxiosResponse>({
                url: `${BASE}${API}${V1}${SKILLS}`,
                body: skill
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