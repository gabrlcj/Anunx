import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'O campo "nome" é obrigatório.'],
  },
  email: {
    type: String,
    required: [true, 'O campo "e-mail" é obrigatório.'],
  },
  password: {
    type: String,
    required: [true, 'O campo "senha" é obrigatório.'],
  },
})
// Se já houver o model ele utiliza || se não cria um novo model com esse schema
export default mongoose.models.users || mongoose.model('users', schema)
