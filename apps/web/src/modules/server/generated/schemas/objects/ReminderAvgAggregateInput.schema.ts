import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ReminderAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    daysInFuture: z.literal(true).optional(),
    restaurantId: z.literal(true).optional(),
  })
  .strict()

export const ReminderAvgAggregateInputObjectSchema = Schema
