import { z } from 'zod'
import { VisitIncludeObjectSchema } from './objects/VisitInclude.schema'
import { VisitOrderByWithRelationInputObjectSchema } from './objects/VisitOrderByWithRelationInput.schema'
import { VisitWhereInputObjectSchema } from './objects/VisitWhereInput.schema'
import { VisitWhereUniqueInputObjectSchema } from './objects/VisitWhereUniqueInput.schema'
import { VisitScalarFieldEnumSchema } from './enums/VisitScalarFieldEnum.schema'

export const VisitFindFirstSchema = z.object({
  include: VisitIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      VisitOrderByWithRelationInputObjectSchema,
      VisitOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: VisitWhereInputObjectSchema.optional(),
  cursor: VisitWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(VisitScalarFieldEnumSchema).optional(),
})
