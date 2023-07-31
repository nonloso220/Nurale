import { Resource } from "../../resource";



export interface initialStateResources{
    data: Resource[];
    loading: boolean;
    error: null | string;
    totalCount:number
}
