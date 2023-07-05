export interface Skill{
    name: string;
    note: string;
    skillType: string;
    id?: number | null;
}
export interface initialStateSkill
{
    data: Skill | null,
    loading: boolean,
    error: string | null
}