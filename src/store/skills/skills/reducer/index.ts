import { createSlice } from "@reduxjs/toolkit";
import { fetchSkills, initialStateSkills } from "..";

const initialState : initialStateSkills =
{
    data:[],
    loading: false,
    error: null,
    totalCount:0,
};

export const skillsReducer = createSlice(
    {
        name: "skills",
        initialState,
        reducers:{},
        extraReducers: (builder) =>
        {
            builder
                .addCase(fetchSkills.fulfilled, (state, action) =>
                {
                    state.data = action.payload.data;
                    state.totalCount = action.payload.pagination.totalCount;
                    state.loading = false;
                })
                .addCase(fetchSkills.pending, (state) =>
                {
                    state.loading = true;
                })
                .addCase(fetchSkills.rejected, (state) =>
                {
                    state.loading = false;
                    state.error = "error fetch skills";
                })
        }
    }
)