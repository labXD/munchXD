import { z } from 'zod'
import { VisitWhereInputObjectSchema } from './objects/VisitWhereInput.schema'
import { VisitOrderByWithAggregationInputObjectSchema } from './objects/VisitOrderByWithAggregationInput.schema'
import { VisitScalarWhereWithAggregatesInputObjectSchema } from './objects/VisitScalarWhereWithAggregatesInput.schema'
import { VisitScalarFieldEnumSchema } from './enums/VisitScalarFieldEnum.schema'

export const VisitGroupBySchema = z.object({
  where: VisitWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      VisitOrderByWithAggregationInputObjectSchema,
      VisitOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: VisitScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(VisitScalarFieldEnumSchema),
})
