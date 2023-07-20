import { User } from "../../../../utils/models";


export interface initialStateUsers
{
    data: User[];
    loading: boolean;
    error: null | string;
    totalCount:number
}
