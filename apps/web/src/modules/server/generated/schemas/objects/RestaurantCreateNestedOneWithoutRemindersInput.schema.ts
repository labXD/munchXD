import { z } from 'zod'
import { RestaurantCreateWithoutRemindersInputObjectSchema } from './RestaurantCreateWithoutRemindersInput.schema'
import { RestaurantUncheckedCreateWithoutRemindersInputObjectSchema } from './RestaurantUncheckedCreateWithoutRemindersInput.schema'
import { RestaurantCreateOrConnectWithoutRemindersInputObjectSchema } from './RestaurantCreateOrConnectWithoutRemindersInput.schema'
import { RestaurantWhereUniqueInputObjectSchema } from './RestaurantWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RestaurantCreateNestedOneWithoutRemindersInput> =
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
      connect: z.lazy(() => RestaurantWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const RestaurantCreateNestedOneWithoutRemindersInputObjectSchema = Schema
