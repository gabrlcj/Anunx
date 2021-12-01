import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { useDropzone } from 'react-dropzone'

import { MdDeleteForever, MdAttachMoney } from 'react-icons/md'
import { Container } from '../../../styles/container'
import { PublishSection, InputBox } from './publishStyle'

interface NewFile extends File {
  preview: string
}

const Publish: NextPage = () => {
  const [files, setFiles] = useState<NewFile[]>([])

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles: File[]) => {
      const newFiles = acceptedFiles.map((file) => {
        return Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      })
      setFiles((prevState) => [...prevState, ...newFiles])
    },
  })

  const handleRemoveFile = (fileName: string) => {
    const newFileState = files.filter((file) => file.name !== fileName)
    setFiles(newFileState)
  }

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
        <InputBox>
          <label htmlFor='title'>Título do anúncio</label>
          <input
            name='title'
            type='text'
            placeholder='ex.: Bicicleta aro 18 com garantia'
          />
          <br />
          <label htmlFor='category'>Categorias</label>
          <select name='category' id='category'>
            <option value=''>Selecione</option>
            <option value=''>Bebê e Criança</option>
            <option value=''>Agricultura</option>
            <option value=''>Moda</option>
            <option value=''>Carros, Motos e Barcos</option>
            <option value=''>Serviços</option>
            <option value=''>Lazer</option>
            <option value=''>Animais</option>
            <option value=''>Moveis, Casa e Jardim</option>
            <option value=''>Imóveis</option>
            <option value=''>Equipamento e Ferramentas</option>
            <option value=''>Celulares e Tablet</option>
            <option value=''>Esporte</option>
            <option value=''>Tecnologia</option>
            <option value=''>Emprego</option>
            <option value=''>Outros</option>
          </select>
        </InputBox>

        <InputBox>
          <h1>Imagens</h1>
          <p>A primeira imagem será a principal do seu anúncio!</p>
          <div className='thumbs-container'>
            <div className='dropzone' {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Clique para adicionar ou arraste a imagem aqui.</p>
            </div>
            {files.map((file, index) => (
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
          <p>Escreva os detalhes do seu produto que está sendo anúnciado</p>
          <label htmlFor='description' />
          <textarea name='description' id='description' rows={6} />
        </InputBox>

        <InputBox>
          <h1>Preço</h1>
          <fieldset>
            <legend>Valor</legend>
            <label htmlFor='price' />
            <MdAttachMoney size={20} />
            <input name='price' id='price' type='number' step='0.01' />
          </fieldset>
        </InputBox>

        <InputBox>
          <h1>Dados de Contato</h1>
          <label htmlFor='name' />
          <input name='name' id='name' placeholder='Nome' />
          <label htmlFor='email' />
          <input name='email' id='email' placeholder='E-mail' />
          <label htmlFor='phone' />
          <input name='phone' id='phone' placeholder='Telefone' />
        </InputBox>

        <div className='button-div'>
          <button>Publicar Anúncio</button>
        </div>
      </PublishSection>
    </Container>
  )
}

export default Publish
