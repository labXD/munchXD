import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { RestaurantOrderByWithRelationInputObjectSchema } from './RestaurantOrderByWithRelationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ReminderOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    remindAt: z.lazy(() => SortOrderSchema).optional(),
    daysInFuture: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    restaurantId: z.lazy(() => SortOrderSchema).optional(),
    restaurant: z
      .lazy(() => RestaurantOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict()

export const ReminderOrderByWithRelationInputObjectSchema = Schema
