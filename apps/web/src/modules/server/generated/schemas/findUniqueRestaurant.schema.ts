import { z } from 'zod'
import { RestaurantIncludeObjectSchema } from './objects/RestaurantInclude.schema'
import { RestaurantWhereUniqueInputObjectSchema } from './objects/RestaurantWhereUniqueInput.schema'

export const RestaurantFindUniqueSchema = z.object({
  include: RestaurantIncludeObjectSchema.optional(),
  where: RestaurantWhereUniqueInputObjectSchema,
})
