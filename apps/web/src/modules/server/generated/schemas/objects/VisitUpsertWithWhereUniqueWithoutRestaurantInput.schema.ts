import { z } from 'zod'
import { VisitWhereUniqueInputObjectSchema } from './VisitWhereUniqueInput.schema'
import { VisitUpdateWithoutRestaurantInputObjectSchema } from './VisitUpdateWithoutRestaurantInput.schema'
import { VisitUncheckedUpdateWithoutRestaurantInputObjectSchema } from './VisitUncheckedUpdateWithoutRestaurantInput.schema'
import { VisitCreateWithoutRestaurantInputObjectSchema } from './VisitCreateWithoutRestaurantInput.schema'
import { VisitUncheckedCreateWithoutRestaurantInputObjectSchema } from './VisitUncheckedCreateWithoutRestaurantInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.VisitUpsertWithWhereUniqueWithoutRestaurantInput> =
  z
    .object({
      where: z.lazy(() => VisitWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => VisitUpdateWithoutRestaurantInputObjectSchema),
        z.lazy(() => VisitUncheckedUpdateWithoutRestaurantInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => VisitCreateWithoutRestaurantInputObjectSchema),
        z.lazy(() => VisitUncheckedCreateWithoutRestaurantInputObjectSchema),
      ]),
    })
    .strict()

export const VisitUpsertWithWhereUniqueWithoutRestaurantInputObjectSchema =
  Schema
