import { createSelector } from "reselect";
import { RootState } from "../../../applicationStore";

export const getUsersState = (state : RootState) => state.resources;

export const getResources = createSelector(
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