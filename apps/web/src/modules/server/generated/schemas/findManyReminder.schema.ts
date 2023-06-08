import { z } from 'zod'
import { ReminderIncludeObjectSchema } from './objects/ReminderInclude.schema'
import { ReminderOrderByWithRelationInputObjectSchema } from './objects/ReminderOrderByWithRelationInput.schema'
import { ReminderWhereInputObjectSchema } from './objects/ReminderWhereInput.schema'
import { ReminderWhereUniqueInputObjectSchema } from './objects/ReminderWhereUniqueInput.schema'
import { ReminderScalarFieldEnumSchema } from './enums/ReminderScalarFieldEnum.schema'

export const ReminderFindManySchema = z.object({
  include: z.lazy(() => ReminderIncludeObjectSchema.optional()),
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
  distinct: z.array(ReminderScalarFieldEnumSchema).optional(),
})
