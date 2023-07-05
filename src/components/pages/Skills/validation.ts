import { z } from 'zod'
export const schema = z.object({
    name: z.string().min(5, { message: 'inserire almeno 5 caratteri' }),
    note: z.string().min(5, { message: 'inserire almeno 5 caratteri' }),
    skillType: z.string().min(5, { message: 'inserire almeno 5 caratteri' }),
    
})