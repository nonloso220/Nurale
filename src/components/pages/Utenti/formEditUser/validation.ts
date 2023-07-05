import { z } from 'zod'
export const schema = z.object({
    email: z.string().min(5, { message: 'inserire almeno 5 caratteri' }),
    lastName: z.string().min(5, { message: 'inserire almeno 5 caratteri' }),
    firstName: z.string().min(3, { message: 'inserire almeno 5 caratteri' }),
    phone:z.string().min(9,{message:'numero troppo piccolo'}).nullable(),
    // .max(16,{message:'numero troppo lungo'})
})