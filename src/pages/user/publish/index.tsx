import type { NextPage } from 'next'
import Head from 'next/head'

import { validationSchema, initialValues } from './formValues'
import { useDropzone } from 'react-dropzone'
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik'

import { Container } from '../../../../styles/container'
import { PublishSection, InputBox } from './publishStyle'
import { MdDeleteForever, MdAttachMoney } from 'react-icons/md'

interface NewFile extends File {
  preview: string
}

interface Values {
  title: string
  category: string
  description: string
  price: string
  name: string
  email: string
  phone: string
  files: NewFile[]
}

const Publish: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Publish | AnunX</title>
      </Head>

      <PublishSection>
        <div className='title-container'>
          <h1>Publicar Anúncio</h1>
          <p>Quanto mais detalhado, melhor!</p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }: FormikHelpers<Values>) => {
            console.log('ok enviou o form', values)
            setSubmitting(false)
          }}
        >
          {({
            touched,
            values,
            errors,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const { getRootProps, getInputProps } = useDropzone({
              accept: 'image/*',
              onDrop: (acceptedFiles: File[]) => {
                const newFiles = acceptedFiles.map((file) => {
                  return Object.assign(file, {
                    preview: URL.createObjectURL(file),
                  })
                })
                setFieldValue('files', [...values.files, ...newFiles])
              },
            })

            const handleRemoveFile = (fileName: string) => {
              const newFileState = values.files.filter(
                (file) => file.name !== fileName
              )
              setFieldValue('files', newFileState)
            }

            return (
              <Form onSubmit={handleSubmit}>
                <InputBox>
                  <label htmlFor='title'>Título do anúncio</label>
                  <Field
                    name='title'
                    type='text'
                    value={values.title}
                    onChange={handleChange}
                    placeholder='ex.: Bicicleta aro 18 com garantia'
                    className={errors.title && touched.title ? 'error' : ''}
                  />
                  <ErrorMessage
                    className='error'
                    component='span'
                    name='title'
                  />
                  <br />
                  <label htmlFor='category'>Categorias</label>
                  <Field
                    as='select'
                    name='category'
                    values={values.category}
                    onChange={handleChange}
                    className={
                      errors.category && touched.category ? 'error' : ''
                    }
                  >
                    <option label='Selecione uma categoria' value='' />
                    <option value='Bebê e Criança'>Bebê e Criança</option>
                    <option value='Agricultura'>Agricultura</option>
                    <option value='Moda'>Moda</option>
                    <option value='Carros, Motos e Barcos'>
                      Carros, Motos e Barcos
                    </option>
                    <option value='Serviços'>Serviços</option>
                    <option value='Lazer'>Lazer</option>
                    <option value='Animais'>Animais</option>
                    <option value='Moveis, Casa e Jardim'>
                      Moveis, Casa e Jardim
                    </option>
                    <option value='Imóveis'>Imóveis</option>
                    <option value='Equipamento e Ferramentas'>
                      Equipamento e Ferramentas
                    </option>
                    <option value='Celulares e Tablet'>
                      Celulares e Tablet
                    </option>
                    <option value='Esporte'>Esporte</option>
                    <option value='Tecnologia'>Tecnologia</option>
                    <option value='Emprego'>Emprego</option>
                    <option value='Outros'>Outros</option>
                  </Field>
                  <ErrorMessage
                    className='error'
                    component='span'
                    name='category'
                  />
                </InputBox>

                <InputBox>
                  <h1>Imagens</h1>
                  <p>A primeira imagem será a principal do seu anúncio!</p>
                  <ErrorMessage
                    className='error'
                    component='span'
                    name='files'
                  />
                  <div className='thumbs-container'>
                    <div
                      className={`dropzone ${
                        errors.files && touched.files ? 'error' : ''
                      }`}
                      {...getRootProps()}
                    >
                      <input name='files' {...getInputProps()} />
                      <p>Clique para adicionar ou arraste a imagem aqui.</p>
                    </div>
                    {values.files.map((file: NewFile, index) => (
                      <div
                        key={file.name}
                        className='thumb'
                        style={{
                          backgroundImage: `url(${file.preview})`,
                        }}
                      >
                        {index === 0 ? (
                          <div className='main-image'>
                            <small>Principal</small>
                          </div>
                        ) : null}
                        <div className='mask'>
                          <MdDeleteForever
                            className='delete-icon'
                            onClick={() => handleRemoveFile(file.name)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </InputBox>

                <InputBox>
                  <h1>Descrição</h1>
                  <p>
                    Escreva os detalhes do seu produto que está sendo anúnciado
                  </p>
                  <label htmlFor='description' />
                  <Field
                    as='textarea'
                    name='description'
                    value={values.description}
                    rows={6}
                    onChange={handleChange}
                    className={
                      errors.description && touched.description ? 'error' : ''
                    }
                  />
                  <ErrorMessage
                    className='error'
                    component='span'
                    name='description'
                  />
                </InputBox>

                <InputBox>
                  <h1>Preço</h1>
                  <fieldset
                    className={errors.price && touched.price ? 'error' : ''}
                  >
                    <legend>Valor</legend>
                    <label htmlFor='price' />
                    <MdAttachMoney size={20} />
                    <Field
                      name='price'
                      type='number'
                      step='0.01'
                      value={values.price}
                      onChange={handleChange}
                      placeholder='100,00'
                    />
                  </fieldset>
                  <ErrorMessage
                    className='error'
                    component='span'
                    name='price'
                  />
                </InputBox>

                <InputBox>
                  <h1>Dados de Contato</h1>
                  <label htmlFor='name' />
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
                  <label htmlFor='email' />
                  <Field
                    name='email'
                    type='email'
                    value={values.email}
                    onChange={handleChange}
                    placeholder='E-mail'
                    className={errors.email && touched.email ? 'error' : ''}
                  />
                  <ErrorMessage
                    className='error'
                    component='span'
                    name='email'
                  />
                  <label htmlFor='phone' />
                  <Field
                    name='phone'
                    value={values.phone}
                    onChange={handleChange}
                    placeholder='Telefone'
                    className={errors.phone && touched.phone ? 'error' : ''}
                  />
                  <ErrorMessage
                    className='error'
                    component='span'
                    name='phone'
                  />
                </InputBox>

                <div className='button-div'>
                  <button type='submit'>Publicar Anúncio</button>
                </div>
              </Form>
            )
          }}
        </Formik>
      </PublishSection>
    </Container>
  )
}

export default Publish
