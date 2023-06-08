import { z } from 'zod'
import { RestaurantCreateWithoutVisitsInputObjectSchema } from './RestaurantCreateWithoutVisitsInput.schema'
import { RestaurantUncheckedCreateWithoutVisitsInputObjectSchema } from './RestaurantUncheckedCreateWithoutVisitsInput.schema'
import { RestaurantCreateOrConnectWithoutVisitsInputObjectSchema } from './RestaurantCreateOrConnectWithoutVisitsInput.schema'
import { RestaurantUpsertWithoutVisitsInputObjectSchema } from './RestaurantUpsertWithoutVisitsInput.schema'
import { RestaurantWhereUniqueInputObjectSchema } from './RestaurantWhereUniqueInput.schema'
import { RestaurantUpdateWithoutVisitsInputObjectSchema } from './RestaurantUpdateWithoutVisitsInput.schema'
import { RestaurantUncheckedUpdateWithoutVisitsInputObjectSchema } from './RestaurantUncheckedUpdateWithoutVisitsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RestaurantUpdateOneRequiredWithoutVisitsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RestaurantCreateWithoutVisitsInputObjectSchema),
          z.lazy(() => RestaurantUncheckedCreateWithoutVisitsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => RestaurantCreateOrConnectWithoutVisitsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => RestaurantUpsertWithoutVisitsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => RestaurantWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => RestaurantUpdateWithoutVisitsInputObjectSchema),
          z.lazy(() => RestaurantUncheckedUpdateWithoutVisitsInputObjectSchema),
        ])
        .optional(),
    })
    .strict()

export const RestaurantUpdateOneRequiredWithoutVisitsNestedInputObjectSchema =
  Schema
