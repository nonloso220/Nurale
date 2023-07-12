import { createSelector } from "reselect";
import { RootState } from "../..";

export const getUsersState = (state : RootState) => state.TypeOfPayments;

export const getTypeOfPayments = createSelector(
    getUsersState,
    (state)=> state.data
);

export const getTypeOfPaymentsLoading = createSelector(
    getUsersState,
    (state)=> state.loading
);

export const getTypeOfPaymentsError = createSelector(
    getUsersState,
    (state)=> state.error
);
export const getPaginations = createSelector(
    getUsersState,
    (state)=> state.totalCount
);
// export const getUsersLength = createSelector(
//     getUsers,
//     (users)=> users.length
// );

// export const getUsersFilterByletter = createSelector(
//     getUsers,
//     (users)=> users.filter(user => user.email.includes("p"))
// );