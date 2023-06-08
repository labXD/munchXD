import { z } from 'zod'
import { ReminderCreateWithoutRestaurantInputObjectSchema } from './ReminderCreateWithoutRestaurantInput.schema'
import { ReminderUncheckedCreateWithoutRestaurantInputObjectSchema } from './ReminderUncheckedCreateWithoutRestaurantInput.schema'
import { ReminderCreateOrConnectWithoutRestaurantInputObjectSchema } from './ReminderCreateOrConnectWithoutRestaurantInput.schema'
import { ReminderCreateManyRestaurantInputEnvelopeObjectSchema } from './ReminderCreateManyRestaurantInputEnvelope.schema'
import { ReminderWhereUniqueInputObjectSchema } from './ReminderWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ReminderCreateNestedManyWithoutRestaurantInput> =
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
      createMany: z
        .lazy(() => ReminderCreateManyRestaurantInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ReminderWhereUniqueInputObjectSchema),
          z.lazy(() => ReminderWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict()

export const ReminderCreateNestedManyWithoutRestaurantInputObjectSchema = Schema
