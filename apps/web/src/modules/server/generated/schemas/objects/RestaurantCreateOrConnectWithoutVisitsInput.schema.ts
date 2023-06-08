import { z } from 'zod'
import { RestaurantWhereUniqueInputObjectSchema } from './RestaurantWhereUniqueInput.schema'
import { RestaurantCreateWithoutVisitsInputObjectSchema } from './RestaurantCreateWithoutVisitsInput.schema'
import { RestaurantUncheckedCreateWithoutVisitsInputObjectSchema } from './RestaurantUncheckedCreateWithoutVisitsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RestaurantCreateOrConnectWithoutVisitsInput> = z
  .object({
    where: z.lazy(() => RestaurantWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => RestaurantCreateWithoutVisitsInputObjectSchema),
      z.lazy(() => RestaurantUncheckedCreateWithoutVisitsInputObjectSchema),
    ]),
  })
  .strict()

export const RestaurantCreateOrConnectWithoutVisitsInputObjectSchema = Schema
