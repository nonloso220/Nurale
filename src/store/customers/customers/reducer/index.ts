import { createSlice } from "@reduxjs/toolkit";
import { fetchCustomers} from "../actions";
import { initialStateCustomers } from "../types";

const initialState : initialStateCustomers =
{
    data:[],
    loading: false,
    error: null,
    totalCount:0,
};

export const customersReducer = createSlice(
    {
        name: "Customers",
        initialState,
        reducers:{},
        extraReducers: (builder) =>
        {
            builder
                .addCase(fetchCustomers.fulfilled, (state, action) =>
                {
                    state.data = action.payload.data;
                    state.totalCount = action.payload.pagination.totalCount;
                    state.loading = false;
                })
                .addCase(fetchCustomers.pending, (state) =>
                {
                    state.loading = true;
                })
                .addCase(fetchCustomers.rejected, (state) =>
                {
                    state.loading = false;
                    state.error = "error fetch Customers";
                })
        }
    }
)