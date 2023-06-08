import { z } from 'zod'
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'
import { RestaurantUpdateOneRequiredWithoutVisitsNestedInputObjectSchema } from './RestaurantUpdateOneRequiredWithoutVisitsNestedInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.VisitUpdateInput> = z
  .object({
    dateVisited: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    restaurant: z
      .lazy(
        () => RestaurantUpdateOneRequiredWithoutVisitsNestedInputObjectSchema
      )
      .optional(),
  })
  .strict()

export const VisitUpdateInputObjectSchema = Schema
