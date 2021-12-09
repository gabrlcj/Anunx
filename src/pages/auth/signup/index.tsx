import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import axios from 'axios'
import { toast } from 'react-toastify'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import { initialValues, validationSchema } from './formValues'

import { SignUpSection, InputBox } from './signupStyle'
import { Container } from '../../../../styles/container'

interface FormValuesProps {
  name: string
  email: string
  password: string
  confirmPassword: string
}

const SignUp: NextPage = () => {
  const router = useRouter()

  const handleFormSubmit = async (values: FormValuesProps) => {
    const response = await axios.post('/api/users', values)

    if (response.data.success) {
      toast.success('Cadastro realizado com sucesso!', {
        theme: 'dark',
      })

      router.push('/auth/signin')
    } else if (response.data.error) {
      toast.error('Algo de errado aconteceu no cadastro!', {
        theme: 'dark',
      })
    }
  }

  return (
    <Container>
      <Head>
        <title>Sign up | AnunX</title>
      </Head>

      <SignUpSection>
        <div className='title-container'>
          <h1>Crie a sua conta</h1>
          <h3>E anuncie para todo o Brasil!</h3>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleFormSubmit(values)
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
              <InputBox>
                <div className='input-container'>
                  <label htmlFor='name' hidden>
                    Nome
                  </label>
                  <Field
                    name='name'
                    type='text'
                    value={values.name}
                    onChange={handleChange}
                    placeholder='Nome'
                    className={errors.name && touched.name ? 'error' : ''}
                  />
                  <ErrorMessage
                    className='error'
                    component='span'
                    name='name'
                  />
                </div>

                <div className='input-container'>
                  <label htmlFor='email' hidden>
                    E-mail
                  </label>
                  <Field
                    name='email'
                    type='email'
                    value={values.email}
                    onChange={handleChange}
                    placeholder='Email'
                    className={errors.email && touched.email ? 'error' : ''}
                  />
                  <ErrorMessage
                    className='error'
                    component='span'
                    name='email'
                  />
                </div>

                <div className='input-container'>
                  <label htmlFor='password' hidden>
                    Senha
                  </label>
                  <Field
                    name='password'
                    type='password'
                    value={values.password}
                    onChange={handleChange}
                    placeholder='Senha'
                    className={
                      errors.password && touched.password ? 'error' : ''
                    }
                  />
                  <ErrorMessage
                    className='error'
                    component='span'
                    name='password'
                  />
                </div>

                <div className='input-container'>
                  <label htmlFor='confirmPassword' hidden>
                    Confirmação de senha
                  </label>
                  <Field
                    name='confirmPassword'
                    type='password'
                    value={values.confirmPassword}
                    onChange={handleChange}
                    placeholder='Confirmação de senha'
                    className={
                      errors.confirmPassword && touched.confirmPassword
                        ? 'error'
                        : ''
                    }
                  />
                  <ErrorMessage
                    className='error'
                    component='span'
                    name='confirmPassword'
                  />
                </div>

                {isSubmitting ? (
                  <div className='loading-icon'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                ) : (
                  <button type='submit'>Cadastrar</button>
                )}
                <small>Já tem uma conta? Entre aqui!</small>
              </InputBox>
            </Form>
          )}
        </Formik>
      </SignUpSection>
    </Container>
  )
}

export default SignUp
