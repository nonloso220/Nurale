import { Skill } from "../../skill/types";

export interface initialStateSkills{
    data: Skill[];
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