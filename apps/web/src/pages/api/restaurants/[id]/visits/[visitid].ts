import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'DELETE') {
    return await deleteVisitRecord(req, res)
  } else {
    res.status(405).json({ message: 'Method not allowed', success: false })
  }
}

async function deleteVisitRecord(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.visitid
  try {
    await prisma.visit.delete({
      where: { id: Number(id) },
    })
    res.status(200).json({ message: 'Visit deleted successfully' })
  } catch (error) {
    console.error('Request error', error)
    res.status(500).json({ error: 'Error deleting visit', success: false })
  }
}
