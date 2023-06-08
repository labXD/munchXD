import { z } from 'zod'
import { RestaurantCreateNestedOneWithoutRemindersInputObjectSchema } from './RestaurantCreateNestedOneWithoutRemindersInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ReminderCreateInput> = z
  .object({
    remindAt: z.coerce.date(),
    daysInFuture: z.number().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    restaurant: z.lazy(
      () => RestaurantCreateNestedOneWithoutRemindersInputObjectSchema
    ),
  })
  .strict()

export const ReminderCreateInputObjectSchema = Schema
