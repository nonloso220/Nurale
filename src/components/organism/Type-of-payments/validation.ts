import { z } from 'zod'
export const schema = z.object({
    name: z.string(),
    daysToFirstPayment:z.number(),
    daysBetweenPayments:z.number(),
    numberOfPayments:z.number(),
    movePaymentsToTheEndOfMonth:z.boolean(),
    daysOffsetPayments:z.number(),
    note: z.string().optional(),
})