import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import VercelIcon from '/public/vercel.svg'
import { Container } from '../../styles/container'
import { HomeMain } from './homeStyle'
import { IoSearchSharp } from 'react-icons/io5'
import { ProductCard, ProductsSection } from './user/dashboardStyle'

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
          <ProductCard>
            <Image src={VercelIcon} alt='Produto' />
            <div className='product-details'>
              <h2>Produto X</h2>
              <p>R$ 60,00</p>
            </div>
          </ProductCard>
          <ProductCard>
            <Image src={VercelIcon} alt='Produto' />
            <div className='product-details'>
              <h2>Produto X</h2>
              <p>R$ 60,00</p>
            </div>
          </ProductCard>
          <ProductCard>
            <Image src={VercelIcon} alt='Produto' />
            <div className='product-details'>
              <h2>Produto X</h2>
              <p>R$ 60,00</p>
            </div>
          </ProductCard>
          <ProductCard>
            <Image src={VercelIcon} alt='Produto' />
            <div className='product-details'>
              <h2>Produto X</h2>
              <p>R$ 60,00</p>
            </div>
          </ProductCard>
        </ProductsSection>
      </HomeMain>
    </Container>
  )
}

export default Home
