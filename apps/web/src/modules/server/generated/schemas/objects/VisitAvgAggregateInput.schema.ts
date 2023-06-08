import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.VisitAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    restaurantId: z.literal(true).optional(),
  })
  .strict()

export const VisitAvgAggregateInputObjectSchema = Schema
