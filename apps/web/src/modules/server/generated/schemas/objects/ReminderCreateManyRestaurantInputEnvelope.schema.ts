import { z } from 'zod'
import { ReminderCreateManyRestaurantInputObjectSchema } from './ReminderCreateManyRestaurantInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ReminderCreateManyRestaurantInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ReminderCreateManyRestaurantInputObjectSchema),
      z.lazy(() => ReminderCreateManyRestaurantInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const ReminderCreateManyRestaurantInputEnvelopeObjectSchema = Schema
