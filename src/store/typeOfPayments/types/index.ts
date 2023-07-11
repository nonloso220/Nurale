export interface TypeOfPayment{
    name: string,
    daysToFirstPayment: number,
    daysBetweenPayments: number,
    numberOfPayments: number,
    movePaymentsToTheEndOfMonth: boolean,
    daysOffsetPayments: number,
    note: string
}
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