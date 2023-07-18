import { z } from 'zod'
export const schema = z.object({
    name: z.string().min(5, { message: 'troppo corto' }),
    daysToFirstPayment:z.number(),
    daysBetweenPayments:z.number(),
    numberOfPayments:z.number(),
    movePaymentsToTheEndOfMonth:z.boolean(),
    daysOffsetPayments:z.number(),
    note: z
        .string()
        .min(0, { message: 'corto' })
        .max(300, { message: 'lungo' }).optional()
})