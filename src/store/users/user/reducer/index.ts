import { createSlice } from "@reduxjs/toolkit";
import { createUser } from "../actions";
import { initialStateUser } from "../types";
import { deleteUser } from "../actions/delete";
import { updateUser } from "../actions/update";

const initialState : initialStateUser =
{
    data: null,
    loading: false,
    error: null,
};

export const userReducer = createSlice(
    {
        name: "user",
        initialState,
        reducers:{},
        extraReducers: (builder) =>
        {
            builder
                //casi per la creazione dello user
                .addCase(createUser.fulfilled, (state, action) =>
                {
                    state.data = action.payload;
                    state.loading = false;
                })
                .addCase(createUser.pending, (state) =>
                {
                    state.loading = true;

                    //resetto l'errore precedente
                    state.error = null;
                })
                .addCase(createUser.rejected, (state) =>
                {
                    state.error = "Error loading user";
                    state.loading = false;
                })

                //casi per la eliminazione dello user
                .addCase(deleteUser.fulfilled, (state) =>
                {
                    state.loading = false;
                })
                .addCase(deleteUser.pending, (state) =>
                {
                    state.loading = true;

                    //resetto l'errore precedente
                    state.error = null;
                })
                .addCase(deleteUser.rejected, (state) =>
                {
                    state.error = "Error deleting user";
                    state.loading = false;
                })

                // //casi per la modifica dello user
                .addCase(updateUser.fulfilled, (state, action) =>
                {
                    state.data = action.payload;
                    state.loading = false;
                })
                .addCase(updateUser.pending, (state) =>
                {
                    state.loading = true;

                    //resetto l'errore precedente
                    state.error = null;
                })
                .addCase(updateUser.rejected, (state) =>
                {
                    state.error = "Error loading user";
                    state.loading = false;
                })
        }
    }
)