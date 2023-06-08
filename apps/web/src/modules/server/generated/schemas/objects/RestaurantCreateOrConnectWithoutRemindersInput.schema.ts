import { z } from 'zod'
import { RestaurantWhereUniqueInputObjectSchema } from './RestaurantWhereUniqueInput.schema'
import { RestaurantCreateWithoutRemindersInputObjectSchema } from './RestaurantCreateWithoutRemindersInput.schema'
import { RestaurantUncheckedCreateWithoutRemindersInputObjectSchema } from './RestaurantUncheckedCreateWithoutRemindersInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RestaurantCreateOrConnectWithoutRemindersInput> =
  z
    .object({
      where: z.lazy(() => RestaurantWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => RestaurantCreateWithoutRemindersInputObjectSchema),
        z.lazy(
          () => RestaurantUncheckedCreateWithoutRemindersInputObjectSchema
        ),
      ]),
    })
    .strict()

export const RestaurantCreateOrConnectWithoutRemindersInputObjectSchema = Schema
