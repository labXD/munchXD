import { z } from 'zod'
import { RestaurantIncludeObjectSchema } from './objects/RestaurantInclude.schema'
import { RestaurantCreateInputObjectSchema } from './objects/RestaurantCreateInput.schema'
import { RestaurantUncheckedCreateInputObjectSchema } from './objects/RestaurantUncheckedCreateInput.schema'

export const RestaurantCreateOneSchema = z.object({
  include: RestaurantIncludeObjectSchema.optional(),
  data: z.union([
    RestaurantCreateInputObjectSchema,
    RestaurantUncheckedCreateInputObjectSchema,
  ]),
})
