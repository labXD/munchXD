import { z } from 'zod'
import { VisitScalarWhereInputObjectSchema } from './VisitScalarWhereInput.schema'
import { VisitUpdateManyMutationInputObjectSchema } from './VisitUpdateManyMutationInput.schema'
import { VisitUncheckedUpdateManyWithoutVisitsInputObjectSchema } from './VisitUncheckedUpdateManyWithoutVisitsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.VisitUpdateManyWithWhereWithoutRestaurantInput> =
  z
    .object({
      where: z.lazy(() => VisitScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => VisitUpdateManyMutationInputObjectSchema),
        z.lazy(() => VisitUncheckedUpdateManyWithoutVisitsInputObjectSchema),
      ]),
    })
    .strict()

export const VisitUpdateManyWithWhereWithoutRestaurantInputObjectSchema = Schema
