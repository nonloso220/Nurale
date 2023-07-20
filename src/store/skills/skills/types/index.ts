import { Skill } from "../../skill/types";

export interface initialStateSkills{
    data: Skill[];
    loading: boolean;
    error: null | string;
    totalCount:number
}
