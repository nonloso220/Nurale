export interface Resource{
    firstName: string;
    lastName: string;
    note: string;
    id?: number | null;
    hourCost:number
    hourRevenue:number
    curriculumVitae:string|null
    supplierId:number
    supplier:{
        id:number
        name:string
    }|null
}
export interface initialStateResource
{
    data: Resource | null,
    loading: boolean,
    error: string | null
}