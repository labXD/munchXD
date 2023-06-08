import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.VisitCreateManyInput> = z
  .object({
    id: z.number().optional(),
    dateVisited: z.coerce.date(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    restaurantId: z.number(),
  })
  .strict()

export const VisitCreateManyInputObjectSchema = Schema
