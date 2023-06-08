import { z } from 'zod'
import { ReminderUpdateManyMutationInputObjectSchema } from './objects/ReminderUpdateManyMutationInput.schema'
import { ReminderWhereInputObjectSchema } from './objects/ReminderWhereInput.schema'

export const ReminderUpdateManySchema = z.object({
  data: ReminderUpdateManyMutationInputObjectSchema,
  where: ReminderWhereInputObjectSchema.optional(),
})
