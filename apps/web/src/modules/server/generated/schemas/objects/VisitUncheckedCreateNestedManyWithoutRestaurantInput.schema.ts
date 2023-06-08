import { z } from 'zod'
import { VisitCreateWithoutRestaurantInputObjectSchema } from './VisitCreateWithoutRestaurantInput.schema'
import { VisitUncheckedCreateWithoutRestaurantInputObjectSchema } from './VisitUncheckedCreateWithoutRestaurantInput.schema'
import { VisitCreateOrConnectWithoutRestaurantInputObjectSchema } from './VisitCreateOrConnectWithoutRestaurantInput.schema'
import { VisitCreateManyRestaurantInputEnvelopeObjectSchema } from './VisitCreateManyRestaurantInputEnvelope.schema'
import { VisitWhereUniqueInputObjectSchema } from './VisitWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.VisitUncheckedCreateNestedManyWithoutRestaurantInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => VisitCreateWithoutRestaurantInputObjectSchema),
          z.lazy(() => VisitCreateWithoutRestaurantInputObjectSchema).array(),
          z.lazy(() => VisitUncheckedCreateWithoutRestaurantInputObjectSchema),
          z
            .lazy(() => VisitUncheckedCreateWithoutRestaurantInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => VisitCreateOrConnectWithoutRestaurantInputObjectSchema),
          z
            .lazy(() => VisitCreateOrConnectWithoutRestaurantInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => VisitCreateManyRestaurantInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => VisitWhereUniqueInputObjectSchema),
          z.lazy(() => VisitWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const VisitUncheckedCreateNestedManyWithoutRestaurantInputObjectSchema =
  Schema
