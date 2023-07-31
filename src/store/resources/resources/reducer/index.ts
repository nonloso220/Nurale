import { createSlice } from "@reduxjs/toolkit";
import { fetchResource, initialStateResources } from "..";

const initialState : initialStateResources =
{
    data:[],
    loading: false,
    error: null,
    totalCount:0,
};

export const resourcesReducer = createSlice(
    {
        name: "resources",
        initialState,
        reducers:{},
        extraReducers: (builder) =>
        {
            builder
                .addCase(fetchResource.fulfilled, (state, action) =>
                {
                    state.data = action.payload.data;
                    state.totalCount = action.payload.pagination.totalCount;
                    state.loading = false;
                })
                .addCase(fetchResource.pending, (state) =>
                {
                    state.loading = true;
                })
                .addCase(fetchResource.rejected, (state) =>
                {
                    state.loading = false;
                    state.error = "error fetch resources";
                })
        }
    }
)