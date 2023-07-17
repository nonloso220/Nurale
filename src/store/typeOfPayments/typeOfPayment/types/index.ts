export interface TypeOfPayment{
    name: string,
    daysToFirstPayment: number,
    daysBetweenPayments: number,
    numberOfPayments: number,
    movePaymentsToTheEndOfMonth: boolean,
    daysOffsetPayments: number,
    note: string
    id?: number | null
}