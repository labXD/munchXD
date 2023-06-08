import { z } from 'zod'
import { IntFilterObjectSchema } from './IntFilter.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema'
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema'
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'
import { VisitListRelationFilterObjectSchema } from './VisitListRelationFilter.schema'
import { ReminderListRelationFilterObjectSchema } from './ReminderListRelationFilter.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RestaurantWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RestaurantWhereInputObjectSchema),
        z.lazy(() => RestaurantWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RestaurantWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RestaurantWhereInputObjectSchema),
        z.lazy(() => RestaurantWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    place_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    address: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    google_map_url: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    lat: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    lng: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    visits: z.lazy(() => VisitListRelationFilterObjectSchema).optional(),
    reminders: z.lazy(() => ReminderListRelationFilterObjectSchema).optional(),
  })
  .strict()

export const RestaurantWhereInputObjectSchema = Schema
