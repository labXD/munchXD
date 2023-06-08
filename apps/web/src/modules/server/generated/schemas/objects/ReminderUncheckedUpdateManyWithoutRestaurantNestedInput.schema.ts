import { z } from 'zod'
import { ReminderCreateWithoutRestaurantInputObjectSchema } from './ReminderCreateWithoutRestaurantInput.schema'
import { ReminderUncheckedCreateWithoutRestaurantInputObjectSchema } from './ReminderUncheckedCreateWithoutRestaurantInput.schema'
import { ReminderCreateOrConnectWithoutRestaurantInputObjectSchema } from './ReminderCreateOrConnectWithoutRestaurantInput.schema'
import { ReminderUpsertWithWhereUniqueWithoutRestaurantInputObjectSchema } from './ReminderUpsertWithWhereUniqueWithoutRestaurantInput.schema'
import { ReminderCreateManyRestaurantInputEnvelopeObjectSchema } from './ReminderCreateManyRestaurantInputEnvelope.schema'
import { ReminderWhereUniqueInputObjectSchema } from './ReminderWhereUniqueInput.schema'
import { ReminderUpdateWithWhereUniqueWithoutRestaurantInputObjectSchema } from './ReminderUpdateWithWhereUniqueWithoutRestaurantInput.schema'
import { ReminderUpdateManyWithWhereWithoutRestaurantInputObjectSchema } from './ReminderUpdateManyWithWhereWithoutRestaurantInput.schema'
import { ReminderScalarWhereInputObjectSchema } from './ReminderScalarWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ReminderUncheckedUpdateManyWithoutRestaurantNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ReminderCreateWithoutRestaurantInputObjectSchema),
          z
            .lazy(() => ReminderCreateWithoutRestaurantInputObjectSchema)
            .array(),
          z.lazy(
            () => ReminderUncheckedCreateWithoutRestaurantInputObjectSchema
          ),
          z
            .lazy(
              () => ReminderUncheckedCreateWithoutRestaurantInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ReminderCreateOrConnectWithoutRestaurantInputObjectSchema
          ),
          z
            .lazy(
              () => ReminderCreateOrConnectWithoutRestaurantInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ReminderUpsertWithWhereUniqueWithoutRestaurantInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ReminderUpsertWithWhereUniqueWithoutRestaurantInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ReminderCreateManyRestaurantInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ReminderWhereUniqueInputObjectSchema),
          z.lazy(() => ReminderWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ReminderWhereUniqueInputObjectSchema),
          z.lazy(() => ReminderWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ReminderWhereUniqueInputObjectSchema),
          z.lazy(() => ReminderWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ReminderWhereUniqueInputObjectSchema),
          z.lazy(() => ReminderWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ReminderUpdateWithWhereUniqueWithoutRestaurantInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ReminderUpdateWithWhereUniqueWithoutRestaurantInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ReminderUpdateManyWithWhereWithoutRestaurantInputObjectSchema
          ),
          z
            .lazy(
              () =>
                ReminderUpdateManyWithWhereWithoutRestaurantInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ReminderScalarWhereInputObjectSchema),
          z.lazy(() => ReminderScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const ReminderUncheckedUpdateManyWithoutRestaurantNestedInputObjectSchema =
  Schema
