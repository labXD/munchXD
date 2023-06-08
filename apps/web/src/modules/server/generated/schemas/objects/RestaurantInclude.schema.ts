import { z } from 'zod'
import { VisitFindManySchema } from '../findManyVisit.schema'
import { ReminderFindManySchema } from '../findManyReminder.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.RestaurantInclude> = z
  .object({
    visits: z
      .union([z.boolean(), z.lazy(() => VisitFindManySchema)])
      .optional(),
    reminders: z
      .union([z.boolean(), z.lazy(() => ReminderFindManySchema)])
      .optional(),
    _count: z.boolean().optional(),
  })
  .strict()

export const RestaurantIncludeObjectSchema = Schema
