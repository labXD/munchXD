import { PrismaClient, Visit } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query as { id: string }

  if (req.method === 'POST') {
    return await createVisit(req, res)
  } else if (req.method === 'GET') {
    return await getVisits(res, id)
  } else {
    res.status(405).json({ message: 'Method not allowed', success: false })
  }
}

async function createVisit(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body
  try {
    const newRecord: Visit = await prisma.visit.create({
      data: { ...body },
    })
    return res.status(200).json({ data: newRecord, success: true })
  } catch (error) {
    console.error('Request error', error)
    res.status(500).json({ error: 'Error adding restuarant', success: false })
  }
}

async function getVisits(res: NextApiResponse, id: string) {
  const numericId = parseInt(id, 10)

  try {
    const getRecords: Visit[] = await prisma.visit.findMany({
      where: { restaurantId: numericId },
    })
    return res.status(200).json({ data: getRecords, success: true })
  } catch (error) {
    console.error('Request error', error)
    res.status(500).json({ error: 'Error getting restuarants', success: false })
  }
}
