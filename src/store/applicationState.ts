import {combineReducers} from "@reduxjs/toolkit";
import { userReducer, usersReducer } from "./users";
import { skillReduxer, skillsReducer } from "./skills";
import { authReducer } from "./auth";

const rootReducer = combineReducers(
{
        users: usersReducer.reducer,
        user:userReducer.reducer,
        auth: authReducer.reducer,
        skills:skillsReducer.reducer,
        skill:skillReduxer.reducer
})
export default rootReducer