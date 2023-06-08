import { z } from 'zod'
import { VisitWhereInputObjectSchema } from './objects/VisitWhereInput.schema'

export const VisitDeleteManySchema = z.object({
  where: VisitWhereInputObjectSchema.optional(),
})
