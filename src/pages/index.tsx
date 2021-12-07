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
          <Card
            image={
              'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            }
            title='Produto X'
            subtitle='R$ 60,00'
          />
          <Card
            image={
              'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            }
            title='Produto X'
            subtitle='R$ 60,00'
          />
          <Card
            image={
              'https://images.unsplash.com/photo-1627483262769-04d0a1401487?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            }
            title='Produto X'
            subtitle='R$ 60,00'
          />
          <Card
            image={
              'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122&q=80'
            }
            title='Produto X'
            subtitle='R$ 60,00'
          />
          <Card
            image={
              'https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
            }
            title='Produto X'
            subtitle='R$ 60,00'
          />
        </ProductsSection>
      </HomeMain>
    </Container>
  )
}

export default Home
