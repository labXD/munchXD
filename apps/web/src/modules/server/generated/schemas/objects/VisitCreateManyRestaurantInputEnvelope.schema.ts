import { z } from 'zod'
import { VisitCreateManyRestaurantInputObjectSchema } from './VisitCreateManyRestaurantInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.VisitCreateManyRestaurantInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => VisitCreateManyRestaurantInputObjectSchema),
      z.lazy(() => VisitCreateManyRestaurantInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const VisitCreateManyRestaurantInputEnvelopeObjectSchema = Schema
