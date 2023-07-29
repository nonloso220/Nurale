import { createSelector } from "reselect";
import { RootState } from "../../../applicationStore";

export const getUsersState = (state : RootState) => state.suppliers;

export const getSuppliers = createSelector(
    getUsersState,
    (state)=> state.data
);

export const getSkillsLoading = createSelector(
    getUsersState,
    (state)=> state.loading
);

export const getSkillsError = createSelector(
    getUsersState,
    (state)=> state.error
);
export const getPaginations = createSelector(
    getUsersState,
    (state)=> state.totalCount
);