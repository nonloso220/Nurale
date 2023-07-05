import { z } from 'zod'
export const schema = z.object({
    email: z.string().min(5, { message: 'inserire almeno 5 caratteri' }),
    password: z.string().min(5, { message: 'inserire almeno 5 caratteri' }),
})