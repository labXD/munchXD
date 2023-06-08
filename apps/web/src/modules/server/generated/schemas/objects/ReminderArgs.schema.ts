import { z } from 'zod'
import { ReminderIncludeObjectSchema } from './ReminderInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ReminderArgs> = z
  .object({
    include: z.lazy(() => ReminderIncludeObjectSchema).optional(),
  })
  .strict()

export const ReminderArgsObjectSchema = Schema
