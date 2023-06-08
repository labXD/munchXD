import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { VisitCountOrderByAggregateInputObjectSchema } from './VisitCountOrderByAggregateInput.schema'
import { VisitAvgOrderByAggregateInputObjectSchema } from './VisitAvgOrderByAggregateInput.schema'
import { VisitMaxOrderByAggregateInputObjectSchema } from './VisitMaxOrderByAggregateInput.schema'
import { VisitMinOrderByAggregateInputObjectSchema } from './VisitMinOrderByAggregateInput.schema'
import { VisitSumOrderByAggregateInputObjectSchema } from './VisitSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.VisitOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    dateVisited: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    restaurantId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => VisitCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => VisitAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => VisitMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => VisitMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => VisitSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const VisitOrderByWithAggregationInputObjectSchema = Schema
