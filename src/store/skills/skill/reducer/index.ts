import { createSlice } from "@reduxjs/toolkit";
import { createSkill, deleteSkill, initialStateSkill, updateSkill } from "..";

const initialState : initialStateSkill =
{
    data: null,
    loading: false,
    error: null,
};

export const skillReduxer = createSlice(
    {
        name: "skill",
        initialState,
        reducers:{},
        extraReducers: (builder) =>
        {
            builder
                //casi per la creazione dello skill
                .addCase(createSkill.fulfilled, (state, action) =>
                {
                    state.data = action.payload;
                    state.loading = false;
                })
                .addCase(createSkill.pending, (state) =>
                {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(createSkill.rejected, (state) =>
                {
                    state.error = "Error loading skill";
                    state.loading = false;
                })

                //casi per la eliminazione dello skill
                .addCase(deleteSkill.fulfilled, (state) =>
                {
                    state.loading = false;
                })
                .addCase(deleteSkill.pending, (state) =>
                {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(deleteSkill.rejected, (state) =>
                {
                    state.error = "Error deleting skill";
                    state.loading = false;
                })

                // //casi per la modifica dello skill
                .addCase(updateSkill.fulfilled, (state, action) =>
                {
                    state.data = action.payload;
                    state.loading = false;
                })
                .addCase(updateSkill.pending, (state) =>
                {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(updateSkill.rejected, (state) =>
                {
                    state.error = "Error loading skill";
                    state.loading = false;
                })
        }
    }
)