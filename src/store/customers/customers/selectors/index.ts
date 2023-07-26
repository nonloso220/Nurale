import { createSelector } from "reselect";
import { RootState } from "../../..";

export const getUsersState = (state : RootState) => state.customers;

export const getCustomers = createSelector(
    getUsersState,
    (state)=> state.data
);

export const getCustomersLoading = createSelector(
    getUsersState,
    (state)=> state.loading
);

export const getCustomersError = createSelector(
    getUsersState,
    (state)=> state.error
);
export const getPaginations = createSelector(
    getUsersState,
    (state)=> state.totalCount
);