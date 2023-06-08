import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { ReminderCountOrderByAggregateInputObjectSchema } from './ReminderCountOrderByAggregateInput.schema'
import { ReminderAvgOrderByAggregateInputObjectSchema } from './ReminderAvgOrderByAggregateInput.schema'
import { ReminderMaxOrderByAggregateInputObjectSchema } from './ReminderMaxOrderByAggregateInput.schema'
import { ReminderMinOrderByAggregateInputObjectSchema } from './ReminderMinOrderByAggregateInput.schema'
import { ReminderSumOrderByAggregateInputObjectSchema } from './ReminderSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ReminderOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    remindAt: z.lazy(() => SortOrderSchema).optional(),
    daysInFuture: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    restaurantId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ReminderCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => ReminderAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ReminderMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ReminderMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ReminderSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const ReminderOrderByWithAggregationInputObjectSchema = Schema
