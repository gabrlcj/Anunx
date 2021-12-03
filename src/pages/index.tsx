import type { NextPage } from 'next'
import Head from 'next/head'
import Card from '../components/Card'

import VercelIcon from '/public/vercel.svg'
import { Container } from '../../styles/container'
import { HomeMain, ProductsSection } from './homeStyle'
import { IoSearchSharp } from 'react-icons/io5'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Home | AnunX</title>
      </Head>

      <HomeMain>
        <h1>O que deseja encontrar?</h1>
        <div className='search-box'>
          <label htmlFor='search' />
          <input
            type='text'
            name='search'
            id='search'
            placeholder='Ex.: iPhone XS Max com garantia'
          />
          <IoSearchSharp size={24} />
        </div>

        <h2>Destaques</h2>
        <ProductsSection>
          <Card image={VercelIcon} title='Produto X' subtitle='R$ 60,00' />
          <Card image={VercelIcon} title='Produto X' subtitle='R$ 60,00' />
          <Card image={VercelIcon} title='Produto X' subtitle='R$ 60,00' />
          <Card image={VercelIcon} title='Produto X' subtitle='R$ 60,00' />
          <Card image={VercelIcon} title='Produto X' subtitle='R$ 60,00' />
        </ProductsSection>
      </HomeMain>
    </Container>
  )
}

export default Home
