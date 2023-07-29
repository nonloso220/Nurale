import {combineReducers} from "@reduxjs/toolkit";
import { userReducer, usersReducer } from "./users";
import { skillReducer, skillsReducer } from "./skills";
import { authReducer } from "./auth";
import { typeOfPaymentReducer, typeOfPaymentsReducer } from "./typeOfPayments";
import { customerReducer, customersReducer } from "./customers";
import { supplierReducer, suppliersReducer } from "./suppliers";

const rootReducer = combineReducers(
{
        auth: authReducer.reducer,
        users: usersReducer.reducer,
        user:userReducer.reducer,
        skills:skillsReducer.reducer,
        skill:skillReducer.reducer,
        typeOfPayments:typeOfPaymentsReducer.reducer,
        typeOfPayment:typeOfPaymentReducer.reducer,
        customers:customersReducer.reducer,
        customer:customerReducer.reducer,
        suppliers:suppliersReducer.reducer,
        supplier:supplierReducer.reducer,
})
export default rootReducer