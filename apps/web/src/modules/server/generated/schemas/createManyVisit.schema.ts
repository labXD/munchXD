import { z } from 'zod'
import { VisitCreateManyInputObjectSchema } from './objects/VisitCreateManyInput.schema'

export const VisitCreateManySchema = z.object({
  data: z.union([
    VisitCreateManyInputObjectSchema,
    z.array(VisitCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
})
