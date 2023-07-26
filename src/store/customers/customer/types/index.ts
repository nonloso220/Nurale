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