import { z } from 'zod'

export const ReminderScalarFieldEnumSchema = z.enum([
  'id',
  'remindAt',
  'daysInFuture',
  'createdAt',
  'updatedAt',
  'restaurantId',
])
