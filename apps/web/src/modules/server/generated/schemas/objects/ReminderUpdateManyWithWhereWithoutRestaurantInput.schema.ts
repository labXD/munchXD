import { z } from 'zod'
import { ReminderScalarWhereInputObjectSchema } from './ReminderScalarWhereInput.schema'
import { ReminderUpdateManyMutationInputObjectSchema } from './ReminderUpdateManyMutationInput.schema'
import { ReminderUncheckedUpdateManyWithoutRemindersInputObjectSchema } from './ReminderUncheckedUpdateManyWithoutRemindersInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ReminderUpdateManyWithWhereWithoutRestaurantInput> =
  z
    .object({
      where: z.lazy(() => ReminderScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ReminderUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => ReminderUncheckedUpdateManyWithoutRemindersInputObjectSchema
        ),
      ]),
    })
    .strict()

export const ReminderUpdateManyWithWhereWithoutRestaurantInputObjectSchema =
  Schema
