import { createSlice } from "@reduxjs/toolkit";
import { initialStateResource } from "../types";
import { createResource, deleteResource, updateResource } from "..";

const initialState : initialStateResource =
{
    data: null,
    loading: false,
    error: null,
};

export const resourceReducer = createSlice(
    {
        name: "resource",
        initialState,
        reducers:{},
        extraReducers: (builder) =>
        {
            builder
                //casi per la creazione dello skill
                .addCase(createResource.fulfilled, (state, action) =>
                {
                    state.data = action.payload.data;
                    state.loading = false;
                })
                .addCase(createResource.pending, (state) =>
                {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(createResource.rejected, (state) =>
                {
                    state.error = "Error loading resource";
                    state.loading = false;
                })
                // //casi per la modifica dello skill
                .addCase(updateResource.fulfilled, (state, action) =>
                {
                    state.data = action.payload.data;
                    state.loading = false;
                })
                .addCase(updateResource.pending, (state) =>
                {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(updateResource.rejected, (state) =>
                {
                    state.error = "Error loading resource";
                    state.loading = false;
                })
                //casi per la eliminazione dello skill
                .addCase(deleteResource.fulfilled, (state) =>
                {
                    state.loading = false;
                })
                .addCase(deleteResource.pending, (state) =>
                {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(deleteResource.rejected, (state) =>
                {
                    state.error = "Error deleting resource";
                    state.loading = false;
                })
        }
    }
)