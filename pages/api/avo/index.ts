import { NextApiRequest, NextApiResponse } from 'next'
import Database from '@database'

const allAvos = async (require: NextApiRequest, response: NextApiResponse) => {
  const db = new Database()
  const allEntries = await db.getAll()
  const length = allEntries.length
  response.status(200).json({ data: allEntries, length })
}

export default allAvos
