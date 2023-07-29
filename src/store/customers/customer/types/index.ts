export interface Customer{
    id:number
    name:string
    typeOfPaymentId:number
    note:string
    typeOfPayment:{
        id:number
        name:string
    }
}
export interface initialStateCustomer
{
    data: Customer | null,
    loading: boolean,
    error: string | null
}