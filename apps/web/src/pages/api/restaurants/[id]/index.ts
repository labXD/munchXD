import { PrismaClient, Restaurant } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    return await getRestaurant(req, res)
  } else if (req.method === 'DELETE') {
    return await deleteRestaurant(req, res)
  } else {
    res.status(405).json({ message: 'Method not allowed', success: false })
  }
}

async function getRestaurant(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body

  try {
    const getRecord: Restaurant | null = await prisma.restaurant.findUnique({
      where: { id: body.id },
    })
    return res.status(200).json({ data: getRecord, success: true })
  } catch (error) {
    console.error('Request error', error)
    res.status(500).json({ error: 'Error updating restaurant', success: false })
  }
}

async function deleteRestaurant(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id
  try {
    await prisma.visit.deleteMany({
      where: {
        restaurantId: Number(id),
      },
    })
    await prisma.reminder.deleteMany({
      where: {
        restaurantId: Number(id),
      },
    })
    await prisma.restaurant.delete({
      where: { id: Number(id) },
    })
    res.status(200).json({ message: 'Record deleted successfully' })
  } catch (error) {
    console.error('Request error', error)
    res.status(500).json({ error: 'Error deleting restaurant', success: false })
  }
}
