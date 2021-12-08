import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../lib/dbConnect'

const users = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req

  switch (method) {
    case 'GET':
      await dbConnect()
      res.status(200).json({ sucess: true })
      break
  }
}

export default users
