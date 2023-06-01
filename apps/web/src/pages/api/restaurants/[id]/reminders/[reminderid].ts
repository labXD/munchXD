import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'DELETE') {
    return await deleteReminderRecord(req, res)
  } else {
    res.status(405).json({ message: 'Method not allowed', success: false })
  }
}

async function deleteReminderRecord(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.reminderid
  try {
    await prisma.reminder.delete({
      where: { id: Number(id) },
    })
    res.status(200).json({ message: 'Reminder deleted successfully' })
  } catch (error) {
    console.error('Request error', error)
    res.status(500).json({ error: 'Error deleting reminder', success: false })
  }
}
