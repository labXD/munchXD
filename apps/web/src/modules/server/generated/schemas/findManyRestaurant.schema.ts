import { z } from 'zod'
import { RestaurantIncludeObjectSchema } from './objects/RestaurantInclude.schema'
import { RestaurantOrderByWithRelationInputObjectSchema } from './objects/RestaurantOrderByWithRelationInput.schema'
import { RestaurantWhereInputObjectSchema } from './objects/RestaurantWhereInput.schema'
import { RestaurantWhereUniqueInputObjectSchema } from './objects/RestaurantWhereUniqueInput.schema'
import { RestaurantScalarFieldEnumSchema } from './enums/RestaurantScalarFieldEnum.schema'

export const RestaurantFindManySchema = z.object({
  include: z.lazy(() => RestaurantIncludeObjectSchema.optional()),
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
