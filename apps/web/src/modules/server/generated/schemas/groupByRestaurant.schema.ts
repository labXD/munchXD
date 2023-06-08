import { z } from 'zod'
import { RestaurantWhereInputObjectSchema } from './objects/RestaurantWhereInput.schema'
import { RestaurantOrderByWithAggregationInputObjectSchema } from './objects/RestaurantOrderByWithAggregationInput.schema'
import { RestaurantScalarWhereWithAggregatesInputObjectSchema } from './objects/RestaurantScalarWhereWithAggregatesInput.schema'
import { RestaurantScalarFieldEnumSchema } from './enums/RestaurantScalarFieldEnum.schema'

export const RestaurantGroupBySchema = z.object({
  where: RestaurantWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      RestaurantOrderByWithAggregationInputObjectSchema,
      RestaurantOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: RestaurantScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(RestaurantScalarFieldEnumSchema),
})
