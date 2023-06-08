import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.VisitSumOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    restaurantId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const VisitSumOrderByAggregateInputObjectSchema = Schema
