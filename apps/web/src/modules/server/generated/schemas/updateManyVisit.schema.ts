import { z } from 'zod'
import { VisitUpdateManyMutationInputObjectSchema } from './objects/VisitUpdateManyMutationInput.schema'
import { VisitWhereInputObjectSchema } from './objects/VisitWhereInput.schema'

export const VisitUpdateManySchema = z.object({
  data: VisitUpdateManyMutationInputObjectSchema,
  where: VisitWhereInputObjectSchema.optional(),
})
