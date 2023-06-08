import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RestaurantMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    place_id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    address: z.literal(true).optional(),
    google_map_url: z.literal(true).optional(),
    lat: z.literal(true).optional(),
    lng: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict()

export const RestaurantMaxAggregateInputObjectSchema = Schema
