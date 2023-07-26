import { z } from 'zod'
export const schema = z.object({
    name: z.string(),
    note: z.string(),
    id:z.number(),
    typeOfPaymentId:z.number(),
    // typeOfPayment:{
    //     id:z.number(),
    //     name:z.string(),
    // }
})