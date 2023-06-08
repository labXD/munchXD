import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.VisitCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    dateVisited: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    restaurantId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const VisitCountAggregateInputObjectSchema = Schema
