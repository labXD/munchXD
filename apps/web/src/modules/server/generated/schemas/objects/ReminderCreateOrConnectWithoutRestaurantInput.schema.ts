import { z } from 'zod'
import { ReminderWhereUniqueInputObjectSchema } from './ReminderWhereUniqueInput.schema'
import { ReminderCreateWithoutRestaurantInputObjectSchema } from './ReminderCreateWithoutRestaurantInput.schema'
import { ReminderUncheckedCreateWithoutRestaurantInputObjectSchema } from './ReminderUncheckedCreateWithoutRestaurantInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ReminderCreateOrConnectWithoutRestaurantInput> =
  z
    .object({
      where: z.lazy(() => ReminderWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ReminderCreateWithoutRestaurantInputObjectSchema),
        z.lazy(() => ReminderUncheckedCreateWithoutRestaurantInputObjectSchema),
      ]),
    })
    .strict()

export const ReminderCreateOrConnectWithoutRestaurantInputObjectSchema = Schema
