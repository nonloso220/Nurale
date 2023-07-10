import { z } from 'zod'
export const schema = z.object({
    name: z.string(),
    note: z.string(),
    skillType: z.string(),
    
})