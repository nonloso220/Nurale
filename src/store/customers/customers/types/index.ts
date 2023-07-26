import { Customer } from "../../customer";

export interface initialStateCustomers
{
    data: Customer[];
    loading: boolean;
    error: null | string;
    totalCount:number
}