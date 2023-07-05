import { createSelector } from "reselect";
import { RootState } from "../../../applicationStore";

export const getUsersState = (state : RootState) => state.skills;

export const getSkills = createSelector(
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
// export const getUsersLength = createSelector(
//     getUsers,
//     (users)=> users.length
// );

// export const getUsersFilterByletter = createSelector(
//     getUsers,
//     (users)=> users.filter(user => user.email.includes("p"))
// );