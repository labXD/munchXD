import { z } from 'zod'
import { ReminderIncludeObjectSchema } from './objects/ReminderInclude.schema'
import { ReminderCreateInputObjectSchema } from './objects/ReminderCreateInput.schema'
import { ReminderUncheckedCreateInputObjectSchema } from './objects/ReminderUncheckedCreateInput.schema'

export const ReminderCreateOneSchema = z.object({
  include: ReminderIncludeObjectSchema.optional(),
  data: z.union([
    ReminderCreateInputObjectSchema,
    ReminderUncheckedCreateInputObjectSchema,
  ]),
})
