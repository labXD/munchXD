import { z } from 'zod'
import { RestaurantIncludeObjectSchema } from './RestaurantInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RestaurantArgs> = z
  .object({
    include: z.lazy(() => RestaurantIncludeObjectSchema).optional(),
  })
  .strict()

export const RestaurantArgsObjectSchema = Schema
