import { createSelector } from "reselect";
import { RootState } from "../../..";

export const getTypeOfPaymentState = (state : RootState) => state.typeOfPayment;

export const getTypeOfPayment = createSelector(
    getTypeOfPaymentState,
    (state)=> state.data
);

export const getTypeOfPaymentLoading = createSelector(
    getTypeOfPaymentState,
    (state)=> state.loading
);

export const getTypeOfPaymentError = createSelector(
    getTypeOfPaymentState,
    (state)=> state.error
);
// export const getPaginations = createSelector(
//     getTypeOfPaymentsState,
//     (state)=> state.totalCount
// );