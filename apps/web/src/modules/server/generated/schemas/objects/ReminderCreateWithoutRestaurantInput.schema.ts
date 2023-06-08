import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ReminderCreateWithoutRestaurantInput> = z
  .object({
    remindAt: z.coerce.date(),
    daysInFuture: z.number().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict()

export const ReminderCreateWithoutRestaurantInputObjectSchema = Schema
