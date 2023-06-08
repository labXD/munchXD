import { z } from 'zod'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { RestaurantRelationFilterObjectSchema } from './RestaurantRelationFilter.schema'
import { RestaurantWhereInputObjectSchema } from './RestaurantWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ReminderWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ReminderWhereInputObjectSchema),
        z.lazy(() => ReminderWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ReminderWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ReminderWhereInputObjectSchema),
        z.lazy(() => ReminderWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    remindAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    daysInFuture: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
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

export const ReminderWhereInputObjectSchema = Schema
