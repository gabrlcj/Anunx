import nextConnect from 'next-connect'
import { getUsers, postUser } from '../../controllers/users'

const route = nextConnect()

route.get(getUsers)

route.post(postUser)

export default route
