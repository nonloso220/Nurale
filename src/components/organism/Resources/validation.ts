import { z } from 'zod'
export const schema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    hourCost:z.number(),
    hourRevenue:z.number(),
    supplierId:z.number(),
    curriculumVitae: z.string(),
    note: z.string(),
})