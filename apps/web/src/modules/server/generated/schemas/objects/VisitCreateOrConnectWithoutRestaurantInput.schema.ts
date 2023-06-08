import { z } from 'zod'
import { VisitWhereUniqueInputObjectSchema } from './VisitWhereUniqueInput.schema'
import { VisitCreateWithoutRestaurantInputObjectSchema } from './VisitCreateWithoutRestaurantInput.schema'
import { VisitUncheckedCreateWithoutRestaurantInputObjectSchema } from './VisitUncheckedCreateWithoutRestaurantInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.VisitCreateOrConnectWithoutRestaurantInput> = z
  .object({
    where: z.lazy(() => VisitWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VisitCreateWithoutRestaurantInputObjectSchema),
      z.lazy(() => VisitUncheckedCreateWithoutRestaurantInputObjectSchema),
    ]),
  })
  .strict()

export const VisitCreateOrConnectWithoutRestaurantInputObjectSchema = Schema
