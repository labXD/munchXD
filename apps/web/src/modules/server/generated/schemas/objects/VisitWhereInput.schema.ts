import { z } from 'zod'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { RestaurantRelationFilterObjectSchema } from './RestaurantRelationFilter.schema'
import { RestaurantWhereInputObjectSchema } from './RestaurantWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.VisitWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => VisitWhereInputObjectSchema),
        z.lazy(() => VisitWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => VisitWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => VisitWhereInputObjectSchema),
        z.lazy(() => VisitWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    dateVisited: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    restaurantId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    restaurant: z
      .union([
        z.lazy(() => RestaurantRelationFilterObjectSchema),
        z.lazy(() => RestaurantWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const VisitWhereInputObjectSchema = Schema
