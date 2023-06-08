import { z } from 'zod'
import { VisitIncludeObjectSchema } from './objects/VisitInclude.schema'
import { VisitCreateInputObjectSchema } from './objects/VisitCreateInput.schema'
import { VisitUncheckedCreateInputObjectSchema } from './objects/VisitUncheckedCreateInput.schema'

export const VisitCreateOneSchema = z.object({
  include: VisitIncludeObjectSchema.optional(),
  data: z.union([
    VisitCreateInputObjectSchema,
    VisitUncheckedCreateInputObjectSchema,
  ]),
})
