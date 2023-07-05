import { RootState } from "../../../applicationStore";
import { createSelector } from "reselect";

export const getUsersState = (state : RootState) => state.users;

export const getUsers = createSelector(
    getUsersState,
    (state)=> state.data
);

export const getUsersLoading = createSelector(
    getUsersState,
    (state)=> state.loading
);

export const getUsersError = createSelector(
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