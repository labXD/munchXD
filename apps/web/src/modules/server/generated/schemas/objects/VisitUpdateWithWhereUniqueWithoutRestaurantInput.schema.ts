import { z } from 'zod'
import { VisitWhereUniqueInputObjectSchema } from './VisitWhereUniqueInput.schema'
import { VisitUpdateWithoutRestaurantInputObjectSchema } from './VisitUpdateWithoutRestaurantInput.schema'
import { VisitUncheckedUpdateWithoutRestaurantInputObjectSchema } from './VisitUncheckedUpdateWithoutRestaurantInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.VisitUpdateWithWhereUniqueWithoutRestaurantInput> =
  z
    .object({
      where: z.lazy(() => VisitWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => VisitUpdateWithoutRestaurantInputObjectSchema),
        z.lazy(() => VisitUncheckedUpdateWithoutRestaurantInputObjectSchema),
      ]),
    })
    .strict()

export const VisitUpdateWithWhereUniqueWithoutRestaurantInputObjectSchema =
  Schema
