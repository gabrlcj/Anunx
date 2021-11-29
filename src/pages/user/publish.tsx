import type { NextPage } from 'next'
import Head from 'next/head'
import { Container } from '../../../styles/container'

import { PublishSection, InputBox } from './publishStyle'

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
        </InputBox>

        <InputBox>
          <h1>Descrição</h1>
          <p>Escreva os detalhes do seu produto que está sendo anúnciado</p>
          <label htmlFor='description' />
          <textarea name='description' id='description' rows={6} />
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
