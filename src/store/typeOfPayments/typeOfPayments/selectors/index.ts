import { createSelector } from "reselect";
import { RootState } from "../../..";

export const getTypeOfPaymentsState = (state : RootState) => state.typeOfPayments;

export const getTypeOfPayments = createSelector(
    getTypeOfPaymentsState,
    (state)=> state.data
);

export const getTypeOfPaymentsLoading = createSelector(
    getTypeOfPaymentsState,
    (state)=> state.loading
);

export const getTypeOfPaymentsError = createSelector(
    getTypeOfPaymentsState,
    (state)=> state.error
);
export const getPaginations = createSelector(
    getTypeOfPaymentsState,
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