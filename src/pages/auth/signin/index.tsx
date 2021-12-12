import type { NextPage } from 'next'
import Head from 'next/head'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { initialValues, validationSchema } from './formValues'
import { Container } from '../../../../styles/container'
import { InputBox, SignInSection } from './signinStyles'

interface FormValuesProps {
  email: string
  password: string
}

const Signin: NextPage = () => {
  const handleFormSubmit = async (values: FormValuesProps) => {}

  return (
    <Container>
      <Head>
        <title>Bem vindo | AnunX</title>
      </Head>

      <SignInSection>
        <div className='title-container'>
          <h1>Entre com a sua conta!</h1>
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

                {isSubmitting ? (
                  <div className='loading-icon'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                ) : (
                  <button type='submit'>Entrar</button>
                )}
                <small>Não tem conta? Crie uma aqui!</small>
              </InputBox>
            </Form>
          )}
        </Formik>
      </SignInSection>
    </Container>
  )
}

export default Signin
