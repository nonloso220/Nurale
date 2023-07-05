import { z } from 'zod'
export const schema = z.object({
    email: z.string().min(5, { message: 'inserire almeno 5 caratteri' }),
    password: z.string().min(5, { message: 'inserire almeno 5 caratteri' }),
    passwordConfirm: z.string().min(5, { message: 'inserire almeno 5 caratteri' }),
    lastName: z.string().min(5, { message: 'inserire almeno 5 caratteri' }),
    firstName: z.string().min(3, { message: 'inserire almeno 5 caratteri' }),
    risorsa: z.string().min(5, { message: 'inserire almeno 5 caratteri' }),
})