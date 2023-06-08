import { z } from 'zod'
import { VisitCreateNestedManyWithoutRestaurantInputObjectSchema } from './VisitCreateNestedManyWithoutRestaurantInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RestaurantCreateWithoutRemindersInput> = z
  .object({
    place_id: z.string(),
    name: z.string(),
    address: z.string(),
    google_map_url: z.string().optional().nullable(),
    lat: z.number().optional().nullable(),
    lng: z.number().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    visits: z
      .lazy(() => VisitCreateNestedManyWithoutRestaurantInputObjectSchema)
      .optional(),
  })
  .strict()

export const RestaurantCreateWithoutRemindersInputObjectSchema = Schema
