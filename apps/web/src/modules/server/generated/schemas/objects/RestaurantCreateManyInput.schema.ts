import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RestaurantCreateManyInput> = z
  .object({
    id: z.number().optional(),
    place_id: z.string(),
    name: z.string(),
    address: z.string(),
    google_map_url: z.string().optional().nullable(),
    lat: z.number().optional().nullable(),
    lng: z.number().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict()

export const RestaurantCreateManyInputObjectSchema = Schema
