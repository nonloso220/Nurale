import { TypeOfPayment } from "../../typeOfPayment";

export interface initialStateTypeOfPayments
{
    data: TypeOfPayment[];
    loading: boolean;
    error: null | string;
    totalCount:number
}
export interface QueryParams
{
    search?: string;
    skip?: number;
    take?: number;
}