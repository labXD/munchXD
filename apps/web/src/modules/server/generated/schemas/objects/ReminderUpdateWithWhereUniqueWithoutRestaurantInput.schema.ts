import { z } from 'zod'
import { ReminderWhereUniqueInputObjectSchema } from './ReminderWhereUniqueInput.schema'
import { ReminderUpdateWithoutRestaurantInputObjectSchema } from './ReminderUpdateWithoutRestaurantInput.schema'
import { ReminderUncheckedUpdateWithoutRestaurantInputObjectSchema } from './ReminderUncheckedUpdateWithoutRestaurantInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ReminderUpdateWithWhereUniqueWithoutRestaurantInput> =
  z
    .object({
      where: z.lazy(() => ReminderWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ReminderUpdateWithoutRestaurantInputObjectSchema),
        z.lazy(() => ReminderUncheckedUpdateWithoutRestaurantInputObjectSchema),
      ]),
    })
    .strict()

export const ReminderUpdateWithWhereUniqueWithoutRestaurantInputObjectSchema =
  Schema
