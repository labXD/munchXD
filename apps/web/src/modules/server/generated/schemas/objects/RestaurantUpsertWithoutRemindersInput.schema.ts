import { z } from 'zod'
import { RestaurantUpdateWithoutRemindersInputObjectSchema } from './RestaurantUpdateWithoutRemindersInput.schema'
import { RestaurantUncheckedUpdateWithoutRemindersInputObjectSchema } from './RestaurantUncheckedUpdateWithoutRemindersInput.schema'
import { RestaurantCreateWithoutRemindersInputObjectSchema } from './RestaurantCreateWithoutRemindersInput.schema'
import { RestaurantUncheckedCreateWithoutRemindersInputObjectSchema } from './RestaurantUncheckedCreateWithoutRemindersInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RestaurantUpsertWithoutRemindersInput> = z
  .object({
    update: z.union([
      z.lazy(() => RestaurantUpdateWithoutRemindersInputObjectSchema),
      z.lazy(() => RestaurantUncheckedUpdateWithoutRemindersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => RestaurantCreateWithoutRemindersInputObjectSchema),
      z.lazy(() => RestaurantUncheckedCreateWithoutRemindersInputObjectSchema),
    ]),
  })
  .strict()

export const RestaurantUpsertWithoutRemindersInputObjectSchema = Schema
