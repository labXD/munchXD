import { PrismaClient, Restaurant } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    return await createRestaurant(req, res)
  } else if (req.method === 'GET') {
    return await getRestaurants(res)
  } else {
    return res
      .status(405)
      .json({ message: 'Method not allowed', success: false })
  }
}

async function createRestaurant(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body
  try {
    const newRecord: Restaurant = await prisma.restaurant.create({
      data: { ...body },
    })
    return res.status(200).json({ data: newRecord, success: true })
  } catch (error) {
    console.error('Request error', error)
    res.status(500).json({ error: 'Error adding restuarant', success: false })
  }
}

async function getRestaurants(res: NextApiResponse) {
  try {
    const getRecords: Restaurant[] = await prisma.restaurant.findMany()
    return res.status(200).json({ data: getRecords, success: true })
  } catch (error) {
    console.error('Request error', error)
    res.status(500).json({ error: 'Error getting restuarants', success: false })
  }
}
