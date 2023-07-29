import { Supplier } from "../../supplier";


export interface initialStateSuppliers{
    data: Supplier[];
    loading: boolean;
    error: null | string;
    totalCount:number
}
