import { z } from 'zod'
import { ReminderWhereInputObjectSchema } from './objects/ReminderWhereInput.schema'
import { ReminderOrderByWithAggregationInputObjectSchema } from './objects/ReminderOrderByWithAggregationInput.schema'
import { ReminderScalarWhereWithAggregatesInputObjectSchema } from './objects/ReminderScalarWhereWithAggregatesInput.schema'
import { ReminderScalarFieldEnumSchema } from './enums/ReminderScalarFieldEnum.schema'

export const ReminderGroupBySchema = z.object({
  where: ReminderWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ReminderOrderByWithAggregationInputObjectSchema,
      ReminderOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ReminderScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ReminderScalarFieldEnumSchema),
})
