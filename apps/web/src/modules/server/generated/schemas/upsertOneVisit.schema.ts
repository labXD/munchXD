import { z } from 'zod'
import { VisitIncludeObjectSchema } from './objects/VisitInclude.schema'
import { VisitWhereUniqueInputObjectSchema } from './objects/VisitWhereUniqueInput.schema'
import { VisitCreateInputObjectSchema } from './objects/VisitCreateInput.schema'
import { VisitUncheckedCreateInputObjectSchema } from './objects/VisitUncheckedCreateInput.schema'
import { VisitUpdateInputObjectSchema } from './objects/VisitUpdateInput.schema'
import { VisitUncheckedUpdateInputObjectSchema } from './objects/VisitUncheckedUpdateInput.schema'

export const VisitUpsertSchema = z.object({
  include: VisitIncludeObjectSchema.optional(),
  where: VisitWhereUniqueInputObjectSchema,
  create: z.union([
    VisitCreateInputObjectSchema,
    VisitUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    VisitUpdateInputObjectSchema,
    VisitUncheckedUpdateInputObjectSchema,
  ]),
})
