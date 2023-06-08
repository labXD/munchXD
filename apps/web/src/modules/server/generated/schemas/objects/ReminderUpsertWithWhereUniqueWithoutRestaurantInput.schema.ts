import { z } from 'zod'
import { ReminderWhereUniqueInputObjectSchema } from './ReminderWhereUniqueInput.schema'
import { ReminderUpdateWithoutRestaurantInputObjectSchema } from './ReminderUpdateWithoutRestaurantInput.schema'
import { ReminderUncheckedUpdateWithoutRestaurantInputObjectSchema } from './ReminderUncheckedUpdateWithoutRestaurantInput.schema'
import { ReminderCreateWithoutRestaurantInputObjectSchema } from './ReminderCreateWithoutRestaurantInput.schema'
import { ReminderUncheckedCreateWithoutRestaurantInputObjectSchema } from './ReminderUncheckedCreateWithoutRestaurantInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ReminderUpsertWithWhereUniqueWithoutRestaurantInput> =
  z
    .object({
      where: z.lazy(() => ReminderWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ReminderUpdateWithoutRestaurantInputObjectSchema),
        z.lazy(() => ReminderUncheckedUpdateWithoutRestaurantInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ReminderCreateWithoutRestaurantInputObjectSchema),
        z.lazy(() => ReminderUncheckedCreateWithoutRestaurantInputObjectSchema),
      ]),
    })
    .strict()

export const ReminderUpsertWithWhereUniqueWithoutRestaurantInputObjectSchema =
  Schema
