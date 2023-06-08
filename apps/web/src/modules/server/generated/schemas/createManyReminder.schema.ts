import { z } from 'zod'
import { ReminderCreateManyInputObjectSchema } from './objects/ReminderCreateManyInput.schema'

export const ReminderCreateManySchema = z.object({
  data: z.union([
    ReminderCreateManyInputObjectSchema,
    z.array(ReminderCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
})
