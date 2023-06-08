import { z } from 'zod'
import { RestaurantCreateWithoutVisitsInputObjectSchema } from './RestaurantCreateWithoutVisitsInput.schema'
import { RestaurantUncheckedCreateWithoutVisitsInputObjectSchema } from './RestaurantUncheckedCreateWithoutVisitsInput.schema'
import { RestaurantCreateOrConnectWithoutVisitsInputObjectSchema } from './RestaurantCreateOrConnectWithoutVisitsInput.schema'
import { RestaurantWhereUniqueInputObjectSchema } from './RestaurantWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RestaurantCreateNestedOneWithoutVisitsInput> = z
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
    connect: z.lazy(() => RestaurantWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const RestaurantCreateNestedOneWithoutVisitsInputObjectSchema = Schema
