import { z } from 'zod'
import { VisitIncludeObjectSchema } from './objects/VisitInclude.schema'
import { VisitWhereUniqueInputObjectSchema } from './objects/VisitWhereUniqueInput.schema'

export const VisitDeleteOneSchema = z.object({
  include: VisitIncludeObjectSchema.optional(),
  where: VisitWhereUniqueInputObjectSchema,
})
