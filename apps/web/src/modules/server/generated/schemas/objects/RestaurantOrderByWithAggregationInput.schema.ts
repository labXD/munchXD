import { z } from 'zod'
import { SortOrderSchema } from '../enums/SortOrder.schema'
import { RestaurantCountOrderByAggregateInputObjectSchema } from './RestaurantCountOrderByAggregateInput.schema'
import { RestaurantAvgOrderByAggregateInputObjectSchema } from './RestaurantAvgOrderByAggregateInput.schema'
import { RestaurantMaxOrderByAggregateInputObjectSchema } from './RestaurantMaxOrderByAggregateInput.schema'
import { RestaurantMinOrderByAggregateInputObjectSchema } from './RestaurantMinOrderByAggregateInput.schema'
import { RestaurantSumOrderByAggregateInputObjectSchema } from './RestaurantSumOrderByAggregateInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RestaurantOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    place_id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    address: z.lazy(() => SortOrderSchema).optional(),
    google_map_url: z.lazy(() => SortOrderSchema).optional(),
    lat: z.lazy(() => SortOrderSchema).optional(),
    lng: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => RestaurantCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => RestaurantAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => RestaurantMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => RestaurantMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => RestaurantSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict()

export const RestaurantOrderByWithAggregationInputObjectSchema = Schema
