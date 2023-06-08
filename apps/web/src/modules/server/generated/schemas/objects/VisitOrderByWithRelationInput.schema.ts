import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { RestaurantOrderByWithRelationInputObjectSchema } from './RestaurantOrderByWithRelationInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.VisitOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    dateVisited: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    restaurantId: z.lazy(() => SortOrderSchema).optional(),
    restaurant: z
      .lazy(() => RestaurantOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict()

export const VisitOrderByWithRelationInputObjectSchema = Schema
