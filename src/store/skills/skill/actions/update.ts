import { createAsyncThunk } from "@reduxjs/toolkit";
import { Skill } from "../types";
import apiClient from "../../../../utils/helpers/apiClient";
import { API, BASE, SKILLS, V1 } from "../../../../utils/costants";

export const updateSkill: any = createAsyncThunk(
    "skill/update",
    async (skill:Skill, thunkAPI) =>
    {
        try
        {   
            const body={
                note: skill.note,
                skillType: skill.skillType,
                id:skill.id,
                name:skill.name,
            }
            const response:any = await apiClient.patch(
            {
                url:`${BASE}${API}${V1}${SKILLS}/${skill.id}`,
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