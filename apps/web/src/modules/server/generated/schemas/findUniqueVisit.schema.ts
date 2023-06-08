import { z } from 'zod'
import { VisitIncludeObjectSchema } from './objects/VisitInclude.schema'
import { VisitWhereUniqueInputObjectSchema } from './objects/VisitWhereUniqueInput.schema'

export const VisitFindUniqueSchema = z.object({
  include: VisitIncludeObjectSchema.optional(),
  where: VisitWhereUniqueInputObjectSchema,
})
