import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ReminderCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    remindAt: z.literal(true).optional(),
    daysInFuture: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    restaurantId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const ReminderCountAggregateInputObjectSchema = Schema
