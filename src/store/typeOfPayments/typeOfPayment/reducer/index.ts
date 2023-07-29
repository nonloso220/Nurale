import { createSlice } from "@reduxjs/toolkit";
// import { fetchTypeOfPayments} from "../actions";
import { createTypeOfPayment, deleteTypeOfPayment, updateTypeOfPayments } from "../actions";
import { initialStateTypeOfPayment } from "../types";

const initialState : initialStateTypeOfPayment =
{
    data:null,
    loading: false,
    error: null,
};

export const typeOfPaymentReducer = createSlice(
    {
        name: "Type-of-payments",
        initialState,
        reducers:{},
        extraReducers: (builder) =>
        {
            builder
                .addCase(createTypeOfPayment.fulfilled, (state, action) =>
                {
                    state.data = action.payload.data;
                    
                    state.loading = false;
                })
                .addCase(createTypeOfPayment.pending, (state) =>
                {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(createTypeOfPayment.rejected, (state) =>
                {
                    state.loading = false;
                    state.error = "error create TypeOfPayment";
                })
                .addCase(updateTypeOfPayments.fulfilled, (state, action) =>
                {
                    state.data = action.payload.data;
                    state.loading = false;
                })
                .addCase(updateTypeOfPayments.pending, (state) =>
                {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(updateTypeOfPayments.rejected, (state) =>
                {
                    state.loading = false;
                    state.error = "error fetch TypeOfPayments";
                })
                .addCase(deleteTypeOfPayment.fulfilled, (state) =>
                {
                    state.loading = false;
                })
                .addCase(deleteTypeOfPayment.pending, (state) =>
                {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(deleteTypeOfPayment.rejected, (state) =>
                {
                    state.loading = false;
                    state.error = "error delete TypeOfPayment";
                })
        }
    }
)