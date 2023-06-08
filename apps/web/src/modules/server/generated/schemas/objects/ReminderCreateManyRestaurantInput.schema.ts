import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ReminderCreateManyRestaurantInput> = z
  .object({
    id: z.number().optional(),
    remindAt: z.coerce.date(),
    daysInFuture: z.number().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict()

export const ReminderCreateManyRestaurantInputObjectSchema = Schema
