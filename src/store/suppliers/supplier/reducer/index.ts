import { createSlice } from "@reduxjs/toolkit";
import { initialStateSupplier } from "../types";
import { createSupplier, deleteSupplier, updateSupplier } from "..";

const initialState : initialStateSupplier =
{
    data: null,
    loading: false,
    error: null,
};

export const supplierReducer = createSlice(
    {
        name: "supplier",
        initialState,
        reducers:{},
        extraReducers: (builder) =>
        {
            builder
                //casi per la creazione dello skill
                .addCase(createSupplier.fulfilled, (state, action) =>
                {
                    state.data = action.payload.data;
                    state.loading = false;
                })
                .addCase(createSupplier.pending, (state) =>
                {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(createSupplier.rejected, (state) =>
                {
                    state.error = "Error loading supplier";
                    state.loading = false;
                })
                // //casi per la modifica dello skill
                .addCase(updateSupplier.fulfilled, (state, action) =>
                {
                    state.data = action.payload.data;
                    state.loading = false;
                })
                .addCase(updateSupplier.pending, (state) =>
                {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(updateSupplier.rejected, (state) =>
                {
                    state.error = "Error loading supplier";
                    state.loading = false;
                })
                //casi per la eliminazione dello skill
                .addCase(deleteSupplier.fulfilled, (state) =>
                {
                    state.loading = false;
                })
                .addCase(deleteSupplier.pending, (state) =>
                {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(deleteSupplier.rejected, (state) =>
                {
                    state.error = "Error deleting supplier";
                    state.loading = false;
                })
        }
    }
)