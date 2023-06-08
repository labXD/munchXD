import { z } from 'zod'
import { VisitIncludeObjectSchema } from './objects/VisitInclude.schema'
import { VisitUpdateInputObjectSchema } from './objects/VisitUpdateInput.schema'
import { VisitUncheckedUpdateInputObjectSchema } from './objects/VisitUncheckedUpdateInput.schema'
import { VisitWhereUniqueInputObjectSchema } from './objects/VisitWhereUniqueInput.schema'

export const VisitUpdateOneSchema = z.object({
  include: VisitIncludeObjectSchema.optional(),
  data: z.union([
    VisitUpdateInputObjectSchema,
    VisitUncheckedUpdateInputObjectSchema,
  ]),
  where: VisitWhereUniqueInputObjectSchema,
})
