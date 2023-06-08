import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.VisitUncheckedCreateWithoutRestaurantInput> = z
  .object({
    id: z.number().optional(),
    dateVisited: z.coerce.date(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict()

export const VisitUncheckedCreateWithoutRestaurantInputObjectSchema = Schema
