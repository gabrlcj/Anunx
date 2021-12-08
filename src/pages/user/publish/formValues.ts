import * as yup from 'yup'

const initialValues = {
  title: '',
  category: '',
  description: '',
  price: '',
  name: '',
  email: '',
  phone: '',
  files: [],
}

const validationSchema = yup.object().shape({
  title: yup.string().required('Campo obrigatório.'),
  category: yup.string().required('Campo obrigatório.'),
  description: yup
    .string()
    .min(50, 'Escreva uma descrição com pelo menos 50 caracteres.')
    .required('Campo obrigatório.'),
  price: yup.number().required('Campo obrigatório.'),
  name: yup.string().required('Campo obrigatório.'),
  email: yup
    .string()
    .email('Digite um e-mail válido')
    .required('Campo obrigatório'),
  phone: yup.number().required('Campo obrigatório'),
  files: yup.array().min(1, 'Adicione pelo menos 1 imagem').required(),
})

export { validationSchema, initialValues }
