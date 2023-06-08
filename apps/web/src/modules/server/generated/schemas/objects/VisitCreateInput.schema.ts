import { z } from 'zod'
import { RestaurantCreateNestedOneWithoutVisitsInputObjectSchema } from './RestaurantCreateNestedOneWithoutVisitsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.VisitCreateInput> = z
  .object({
    dateVisited: z.coerce.date(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    restaurant: z.lazy(
      () => RestaurantCreateNestedOneWithoutVisitsInputObjectSchema
    ),
  })
  .strict()

export const VisitCreateInputObjectSchema = Schema
