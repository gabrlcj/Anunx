import type { NextApiRequest, NextApiResponse } from 'next'
import UsersModel from '../models/users'
import dbConnect from '../lib/dbConnect'
import { crypto } from '../utils/password'

const getUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect()
  const users = await UsersModel.find()
  res.status(200).json({ sucess: true, users })
}

const postUser = async (req: NextApiRequest, res: NextApiResponse) => {
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
}

export { getUsers, postUser }
