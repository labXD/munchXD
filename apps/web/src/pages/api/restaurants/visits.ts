import { PrismaClient, Visit } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    return await getRestaurants(res)
  } else {
    return res
      .status(405)
      .json({ message: 'Method not allowed', success: false })
  }
}

async function getRestaurants(res: NextApiResponse) {
  try {
    const getRecords: Visit[] = await prisma.visit.findMany({
      include: {
        restaurant: true,
      },
    })
    return res.status(200).json({ data: getRecords, success: true })
  } catch (error) {
    console.error('Request error', error)
    res.status(500).json({ error: 'Error getting visits', success: false })
  }
}
