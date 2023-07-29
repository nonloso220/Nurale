import { z } from 'zod'
export const schema = z.object({
    name: z.string(),
    note: z.string(),
    typeOfPaymentId:z.number(),
    // typeOfPayment:z.object()
    //     id:z.number(),
    //     name:z.string(),
    // }
})