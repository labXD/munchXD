import { z } from 'zod'
import { ReminderIncludeObjectSchema } from './objects/ReminderInclude.schema'
import { ReminderUpdateInputObjectSchema } from './objects/ReminderUpdateInput.schema'
import { ReminderUncheckedUpdateInputObjectSchema } from './objects/ReminderUncheckedUpdateInput.schema'
import { ReminderWhereUniqueInputObjectSchema } from './objects/ReminderWhereUniqueInput.schema'

export const ReminderUpdateOneSchema = z.object({
  include: ReminderIncludeObjectSchema.optional(),
  data: z.union([
    ReminderUpdateInputObjectSchema,
    ReminderUncheckedUpdateInputObjectSchema,
  ]),
  where: ReminderWhereUniqueInputObjectSchema,
})
