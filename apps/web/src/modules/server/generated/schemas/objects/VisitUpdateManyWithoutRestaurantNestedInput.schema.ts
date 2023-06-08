import { z } from 'zod'
import { VisitCreateWithoutRestaurantInputObjectSchema } from './VisitCreateWithoutRestaurantInput.schema'
import { VisitUncheckedCreateWithoutRestaurantInputObjectSchema } from './VisitUncheckedCreateWithoutRestaurantInput.schema'
import { VisitCreateOrConnectWithoutRestaurantInputObjectSchema } from './VisitCreateOrConnectWithoutRestaurantInput.schema'
import { VisitUpsertWithWhereUniqueWithoutRestaurantInputObjectSchema } from './VisitUpsertWithWhereUniqueWithoutRestaurantInput.schema'
import { VisitCreateManyRestaurantInputEnvelopeObjectSchema } from './VisitCreateManyRestaurantInputEnvelope.schema'
import { VisitWhereUniqueInputObjectSchema } from './VisitWhereUniqueInput.schema'
import { VisitUpdateWithWhereUniqueWithoutRestaurantInputObjectSchema } from './VisitUpdateWithWhereUniqueWithoutRestaurantInput.schema'
import { VisitUpdateManyWithWhereWithoutRestaurantInputObjectSchema } from './VisitUpdateManyWithWhereWithoutRestaurantInput.schema'
import { VisitScalarWhereInputObjectSchema } from './VisitScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.VisitUpdateManyWithoutRestaurantNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => VisitUpsertWithWhereUniqueWithoutRestaurantInputObjectSchema
        ),
        z
          .lazy(
            () => VisitUpsertWithWhereUniqueWithoutRestaurantInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => VisitCreateManyRestaurantInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => VisitWhereUniqueInputObjectSchema),
        z.lazy(() => VisitWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => VisitWhereUniqueInputObjectSchema),
        z.lazy(() => VisitWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => VisitWhereUniqueInputObjectSchema),
        z.lazy(() => VisitWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => VisitWhereUniqueInputObjectSchema),
        z.lazy(() => VisitWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => VisitUpdateWithWhereUniqueWithoutRestaurantInputObjectSchema
        ),
        z
          .lazy(
            () => VisitUpdateWithWhereUniqueWithoutRestaurantInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => VisitUpdateManyWithWhereWithoutRestaurantInputObjectSchema
        ),
        z
          .lazy(
            () => VisitUpdateManyWithWhereWithoutRestaurantInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => VisitScalarWhereInputObjectSchema),
        z.lazy(() => VisitScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const VisitUpdateManyWithoutRestaurantNestedInputObjectSchema = Schema
