import { z } from 'zod'
import { VisitWhereInputObjectSchema } from './VisitWhereInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.VisitListRelationFilter> = z
  .object({
    every: z.lazy(() => VisitWhereInputObjectSchema).optional(),
    some: z.lazy(() => VisitWhereInputObjectSchema).optional(),
    none: z.lazy(() => VisitWhereInputObjectSchema).optional(),
  })
  .strict()

export const VisitListRelationFilterObjectSchema = Schema
