import { z } from 'zod'
import { VisitOrderByWithRelationInputObjectSchema } from './objects/VisitOrderByWithRelationInput.schema'
import { VisitWhereInputObjectSchema } from './objects/VisitWhereInput.schema'
import { VisitWhereUniqueInputObjectSchema } from './objects/VisitWhereUniqueInput.schema'
import { VisitCountAggregateInputObjectSchema } from './objects/VisitCountAggregateInput.schema'
import { VisitMinAggregateInputObjectSchema } from './objects/VisitMinAggregateInput.schema'
import { VisitMaxAggregateInputObjectSchema } from './objects/VisitMaxAggregateInput.schema'
import { VisitAvgAggregateInputObjectSchema } from './objects/VisitAvgAggregateInput.schema'
import { VisitSumAggregateInputObjectSchema } from './objects/VisitSumAggregateInput.schema'

export const VisitAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), VisitCountAggregateInputObjectSchema])
    .optional(),
  _min: VisitMinAggregateInputObjectSchema.optional(),
  _max: VisitMaxAggregateInputObjectSchema.optional(),
  _avg: VisitAvgAggregateInputObjectSchema.optional(),
  _sum: VisitSumAggregateInputObjectSchema.optional(),
})
