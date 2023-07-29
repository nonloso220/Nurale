export interface Supplier{
    name: string;
    note: string;
    typeOfPaymentId:number
    id?: number | null;
    typeOfPayment:{
        id:number
        name:string
    }
}
export interface initialStateSupplier
{
    data: Supplier | null,
    loading: boolean,
    error: string | null
}