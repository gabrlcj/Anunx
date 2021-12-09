import type { NextApiRequest, NextApiResponse } from 'next'
import UsersModel from '../../models/users'
import dbConnect from '../../lib/dbConnect'
import { crypto } from '../../utils/password'

const users = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req

  switch (method) {
    case 'GET':
      await dbConnect()
      res.status(200).json({ sucess: true })
      break

    case 'POST':
      const { name, email, password } = req.body

      await dbConnect()

      const passwordCrypto = await crypto(password)

      const user = new UsersModel({
        name,
        email,
        password: passwordCrypto,
      })

      user.save()

      res.status(201).json({ success: true })
      break
  }
}

export default users
