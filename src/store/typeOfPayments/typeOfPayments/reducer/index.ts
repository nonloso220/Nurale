import { createSlice } from "@reduxjs/toolkit";
import { fetchTypeOfPayments} from "../actions";
import { initialStateTypeOfPayments } from "../types";

const initialState : initialStateTypeOfPayments =
{
    data:[],
    loading: false,
    error: null,
    totalCount:0,
};

export const typeOfPaymentsReducer = createSlice(
    {
        name: "Type-of-payments",
        initialState,
        reducers:{},
        extraReducers: (builder) =>
        {
            builder
                .addCase(fetchTypeOfPayments.fulfilled, (state, action) =>
                {
                    state.data = action.payload.data;
                    state.totalCount = action.payload.pagination.totalCount;
                    state.loading = false;
                })
                .addCase(fetchTypeOfPayments.pending, (state) =>
                {
                    state.loading = true;
                })
                .addCase(fetchTypeOfPayments.rejected, (state) =>
                {
                    state.loading = false;
                    state.error = "error fetch TypeOfPayments";
                })
        }
    }
)