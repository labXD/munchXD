import { z } from 'zod'
import { RestaurantUpdateWithoutVisitsInputObjectSchema } from './RestaurantUpdateWithoutVisitsInput.schema'
import { RestaurantUncheckedUpdateWithoutVisitsInputObjectSchema } from './RestaurantUncheckedUpdateWithoutVisitsInput.schema'
import { RestaurantCreateWithoutVisitsInputObjectSchema } from './RestaurantCreateWithoutVisitsInput.schema'
import { RestaurantUncheckedCreateWithoutVisitsInputObjectSchema } from './RestaurantUncheckedCreateWithoutVisitsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RestaurantUpsertWithoutVisitsInput> = z
  .object({
    update: z.union([
      z.lazy(() => RestaurantUpdateWithoutVisitsInputObjectSchema),
      z.lazy(() => RestaurantUncheckedUpdateWithoutVisitsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => RestaurantCreateWithoutVisitsInputObjectSchema),
      z.lazy(() => RestaurantUncheckedCreateWithoutVisitsInputObjectSchema),
    ]),
  })
  .strict()

export const RestaurantUpsertWithoutVisitsInputObjectSchema = Schema
