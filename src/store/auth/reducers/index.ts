import { createSlice } from "@reduxjs/toolkit";

import { LoginUser } from "../actions/login";
import { initialStateAuth } from "../types";

const initialState : initialStateAuth =
{
    data:[],
    loading: false,
    error: null,
};

export const authReducer = createSlice(
    {
        name: "auth",
        initialState,
        reducers:{},
        extraReducers: (builder) =>
        {
            builder
                .addCase(LoginUser.fulfilled, (state, action) =>
                {
                    state.data = action.payload;
                    state.loading = false;
                })
                .addCase(LoginUser.pending, (state) =>
                {
                    state.loading = true;
                })
                .addCase(LoginUser.rejected, (state) =>
                {
                    state.loading = false;
                    state.error = "error login users";
                })
        }
    }
)