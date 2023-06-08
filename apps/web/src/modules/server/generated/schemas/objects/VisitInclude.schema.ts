import { z } from 'zod'
import { RestaurantArgsObjectSchema } from './RestaurantArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.VisitInclude> = z
  .object({
    restaurant: z
      .union([z.boolean(), z.lazy(() => RestaurantArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const VisitIncludeObjectSchema = Schema
