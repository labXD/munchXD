import { PrismaClient, RestaurantStore } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

// define and instantiate our Prisma client.
const prisma = new PrismaClient()

// specify function when POST or GET is called
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    return await createRestaurant(req, res)
  } else if (req.method === 'GET') {
    return await getRestaurants(req, res)
  } else {
    return res
      .status(405)
      .json({ message: 'Method not allowed', success: false })
  }
}

async function getRestaurants(req: NextApiRequest, res: NextApiResponse) {
  try {
    const restaurants: RestaurantStore[] =
      await prisma.restaurantStore.findMany()
    return res.status(200).json({ data: restaurants, success: true })
  } catch (error) {
    console.error('Request error', error)
    res.status(500).json({ error: 'Error getting restuarants', success: false })
  }
}

async function createRestaurant(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body
  try {
    const newEntry: RestaurantStore = await prisma.restaurantStore.create({
      data: {
        name: body.name ?? '',
        formatted_address: body.formatted_address ?? '',
        formatted_phone_number: body.formatted_phone_number ?? null,
        website: body.website ?? null,
        price_level: body.price_level ?? null,
        rating: body.rating ?? null,
        user_ratings_total: body.user_ratings_total ?? null,
      },
    })
    return res.status(200).json({ data: newEntry, success: true })
  } catch (error) {
    console.error('Request error', error)
    res.status(500).json({ error: 'Error adding restuarant', success: false })
  }
}
