import { createSlice } from "@reduxjs/toolkit";
// import { fetchTypeOfPayments} from "../actions";
import { initialStateCustomers } from '../../customers';
import { createCustomer, deleteCustomer, updateCustomer } from "../actions";

const initialState : initialStateCustomers =
{
    data:[],
    loading: false,
    error: null,
    totalCount:0,
};

export const customerReducer = createSlice(
    {
        name: "Customer",
        initialState,
        reducers:{},
        extraReducers: (builder) =>
        {
            builder
                .addCase(createCustomer.fulfilled, (state, action) =>
                {
                    state.data = action.payload.data;
                    
                    state.loading = false;
                })
                .addCase(createCustomer.pending, (state) =>
                {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(createCustomer.rejected, (state) =>
                {
                    state.loading = false;
                    state.error = "error create Customer";
                })
                .addCase(updateCustomer.fulfilled, (state, action) =>
                {
                    state.data = action.payload.data;
                    state.loading = false;
                })
                .addCase(updateCustomer.pending, (state) =>
                {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(updateCustomer.rejected, (state) =>
                {
                    state.loading = false;
                    state.error = "error fetch Customer";
                })
                .addCase(deleteCustomer.fulfilled, (state) =>
                {
                    state.loading = false;
                })
                .addCase(deleteCustomer.pending, (state) =>
                {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(deleteCustomer.rejected, (state) =>
                {
                    state.loading = false;
                    state.error = "error delete Customer";
                })
        }
    }
)