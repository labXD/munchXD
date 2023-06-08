import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.VisitCreateManyRestaurantInput> = z
  .object({
    id: z.number().optional(),
    dateVisited: z.coerce.date(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict()

export const VisitCreateManyRestaurantInputObjectSchema = Schema
