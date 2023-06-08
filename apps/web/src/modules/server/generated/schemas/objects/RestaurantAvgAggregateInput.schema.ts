import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RestaurantAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    lat: z.literal(true).optional(),
    lng: z.literal(true).optional(),
  })
  .strict()

export const RestaurantAvgAggregateInputObjectSchema = Schema
