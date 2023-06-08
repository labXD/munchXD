import { z } from 'zod'
import { RestaurantWhereInputObjectSchema } from './RestaurantWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RestaurantRelationFilter> = z
  .object({
    is: z.lazy(() => RestaurantWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => RestaurantWhereInputObjectSchema).optional(),
  })
  .strict()

export const RestaurantRelationFilterObjectSchema = Schema
