import { z } from 'zod'
import { RestaurantCreateWithoutRemindersInputObjectSchema } from './RestaurantCreateWithoutRemindersInput.schema'
import { RestaurantUncheckedCreateWithoutRemindersInputObjectSchema } from './RestaurantUncheckedCreateWithoutRemindersInput.schema'
import { RestaurantCreateOrConnectWithoutRemindersInputObjectSchema } from './RestaurantCreateOrConnectWithoutRemindersInput.schema'
import { RestaurantUpsertWithoutRemindersInputObjectSchema } from './RestaurantUpsertWithoutRemindersInput.schema'
import { RestaurantWhereUniqueInputObjectSchema } from './RestaurantWhereUniqueInput.schema'
import { RestaurantUpdateWithoutRemindersInputObjectSchema } from './RestaurantUpdateWithoutRemindersInput.schema'
import { RestaurantUncheckedUpdateWithoutRemindersInputObjectSchema } from './RestaurantUncheckedUpdateWithoutRemindersInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RestaurantUpdateOneRequiredWithoutRemindersNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RestaurantCreateWithoutRemindersInputObjectSchema),
          z.lazy(
            () => RestaurantUncheckedCreateWithoutRemindersInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => RestaurantCreateOrConnectWithoutRemindersInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => RestaurantUpsertWithoutRemindersInputObjectSchema)
        .optional(),
      connect: z.lazy(() => RestaurantWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => RestaurantUpdateWithoutRemindersInputObjectSchema),
          z.lazy(
            () => RestaurantUncheckedUpdateWithoutRemindersInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict()

export const RestaurantUpdateOneRequiredWithoutRemindersNestedInputObjectSchema =
  Schema
