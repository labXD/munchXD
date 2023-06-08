import { z } from 'zod'
import { RestaurantIncludeObjectSchema } from './objects/RestaurantInclude.schema'
import { RestaurantWhereUniqueInputObjectSchema } from './objects/RestaurantWhereUniqueInput.schema'
import { RestaurantCreateInputObjectSchema } from './objects/RestaurantCreateInput.schema'
import { RestaurantUncheckedCreateInputObjectSchema } from './objects/RestaurantUncheckedCreateInput.schema'
import { RestaurantUpdateInputObjectSchema } from './objects/RestaurantUpdateInput.schema'
import { RestaurantUncheckedUpdateInputObjectSchema } from './objects/RestaurantUncheckedUpdateInput.schema'

export const RestaurantUpsertSchema = z.object({
  include: RestaurantIncludeObjectSchema.optional(),
  where: RestaurantWhereUniqueInputObjectSchema,
  create: z.union([
    RestaurantCreateInputObjectSchema,
    RestaurantUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    RestaurantUpdateInputObjectSchema,
    RestaurantUncheckedUpdateInputObjectSchema,
  ]),
})
