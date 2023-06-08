import { z } from 'zod'
import { ReminderWhereInputObjectSchema } from './objects/ReminderWhereInput.schema'

export const ReminderDeleteManySchema = z.object({
  where: ReminderWhereInputObjectSchema.optional(),
})
