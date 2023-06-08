import { z } from 'zod'
import { ReminderIncludeObjectSchema } from './objects/ReminderInclude.schema'
import { ReminderWhereUniqueInputObjectSchema } from './objects/ReminderWhereUniqueInput.schema'

export const ReminderFindUniqueSchema = z.object({
  include: ReminderIncludeObjectSchema.optional(),
  where: ReminderWhereUniqueInputObjectSchema,
})
