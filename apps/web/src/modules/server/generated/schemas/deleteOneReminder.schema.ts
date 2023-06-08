import { z } from 'zod'
import { ReminderIncludeObjectSchema } from './objects/ReminderInclude.schema'
import { ReminderWhereUniqueInputObjectSchema } from './objects/ReminderWhereUniqueInput.schema'

export const ReminderDeleteOneSchema = z.object({
  include: ReminderIncludeObjectSchema.optional(),
  where: ReminderWhereUniqueInputObjectSchema,
})
