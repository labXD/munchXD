import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RestaurantWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
    place_id: z.string().optional(),
  })
  .strict()

export const RestaurantWhereUniqueInputObjectSchema = Schema
