import { PrismaClient, RestaurantStore } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'PUT') {
    return await updateRestaurant(req, res)
  } else {
    res.status(405).json({ message: 'Method not allowed', success: false })
  }
}

async function updateRestaurant(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body
  console.log(req.method, body, 'id')
  try {
    console.log(req.method, 'id in try')
    const updatedEntry: RestaurantStore = await prisma.restaurantStore.update({
      where: { id: body.id },
      data: { visited: body.visited },
    })
    return res.status(200).json({ data: updatedEntry, success: true })
  } catch (error) {
    console.error('Request error', error)
    res.status(500).json({ error: 'Error updating restaurant', success: false })
  }
}
