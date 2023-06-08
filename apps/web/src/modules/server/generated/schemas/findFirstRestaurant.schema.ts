import { z } from 'zod'
import { RestaurantIncludeObjectSchema } from './objects/RestaurantInclude.schema'
import { RestaurantOrderByWithRelationInputObjectSchema } from './objects/RestaurantOrderByWithRelationInput.schema'
import { RestaurantWhereInputObjectSchema } from './objects/RestaurantWhereInput.schema'
import { RestaurantWhereUniqueInputObjectSchema } from './objects/RestaurantWhereUniqueInput.schema'
import { RestaurantScalarFieldEnumSchema } from './enums/RestaurantScalarFieldEnum.schema'

export const RestaurantFindFirstSchema = z.object({
  include: RestaurantIncludeObjectSchema.optional(),
  orderBy: z
    .union([
      RestaurantOrderByWithRelationInputObjectSchema,
      RestaurantOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: RestaurantWhereInputObjectSchema.optional(),
  cursor: RestaurantWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(RestaurantScalarFieldEnumSchema).optional(),
})
