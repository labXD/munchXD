import { z } from 'zod'
import { ReminderOrderByWithRelationInputObjectSchema } from './objects/ReminderOrderByWithRelationInput.schema'
import { ReminderWhereInputObjectSchema } from './objects/ReminderWhereInput.schema'
import { ReminderWhereUniqueInputObjectSchema } from './objects/ReminderWhereUniqueInput.schema'
import { ReminderCountAggregateInputObjectSchema } from './objects/ReminderCountAggregateInput.schema'
import { ReminderMinAggregateInputObjectSchema } from './objects/ReminderMinAggregateInput.schema'
import { ReminderMaxAggregateInputObjectSchema } from './objects/ReminderMaxAggregateInput.schema'
import { ReminderAvgAggregateInputObjectSchema } from './objects/ReminderAvgAggregateInput.schema'
import { ReminderSumAggregateInputObjectSchema } from './objects/ReminderSumAggregateInput.schema'

export const ReminderAggregateSchema = z.object({
  orderBy: z
    .union([
      ReminderOrderByWithRelationInputObjectSchema,
      ReminderOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ReminderWhereInputObjectSchema.optional(),
  cursor: ReminderWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ReminderCountAggregateInputObjectSchema])
    .optional(),
  _min: ReminderMinAggregateInputObjectSchema.optional(),
  _max: ReminderMaxAggregateInputObjectSchema.optional(),
  _avg: ReminderAvgAggregateInputObjectSchema.optional(),
  _sum: ReminderSumAggregateInputObjectSchema.optional(),
})
