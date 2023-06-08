import { z } from 'zod'

export const VisitScalarFieldEnumSchema = z.enum([
  'id',
  'dateVisited',
  'createdAt',
  'updatedAt',
  'restaurantId',
])
