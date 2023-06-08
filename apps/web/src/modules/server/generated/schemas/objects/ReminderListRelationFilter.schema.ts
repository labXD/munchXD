import { z } from 'zod'
import { ReminderWhereInputObjectSchema } from './ReminderWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ReminderListRelationFilter> = z
  .object({
    every: z.lazy(() => ReminderWhereInputObjectSchema).optional(),
    some: z.lazy(() => ReminderWhereInputObjectSchema).optional(),
    none: z.lazy(() => ReminderWhereInputObjectSchema).optional(),
  })
  .strict()

export const ReminderListRelationFilterObjectSchema = Schema
