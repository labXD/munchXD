import { z } from 'zod'

export const RestaurantScalarFieldEnumSchema = z.enum([
  'id',
  'place_id',
  'name',
  'address',
  'google_map_url',
  'lat',
  'lng',
  'createdAt',
  'updatedAt',
])
