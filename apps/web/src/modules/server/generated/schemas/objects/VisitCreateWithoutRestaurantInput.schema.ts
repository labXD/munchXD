import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.VisitCreateWithoutRestaurantInput> = z
  .object({
    dateVisited: z.coerce.date(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict()

export const VisitCreateWithoutRestaurantInputObjectSchema = Schema
