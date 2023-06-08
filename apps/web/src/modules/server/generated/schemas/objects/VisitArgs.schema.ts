import { z } from 'zod'
import { VisitIncludeObjectSchema } from './VisitInclude.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.VisitArgs> = z
  .object({
    include: z.lazy(() => VisitIncludeObjectSchema).optional(),
  })
  .strict()

export const VisitArgsObjectSchema = Schema
