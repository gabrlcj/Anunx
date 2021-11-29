import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Container } from '../../../styles/container'
import {
  DashboardSection,
  ProductsSection,
  ProductCard,
} from './dashboardStyle'

import VercelIcon from '/public/vercel.svg'

const Dashboard: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Dashboard | AnunX</title>
      </Head>

      <DashboardSection>
        <h1>Meus Anúncios</h1>
        <button>Publicar novo anúncio</button>
        <ProductsSection>
          <ProductCard>
            <Image src={VercelIcon} alt='Produto' />
            <div className='product-details'>
              <h2>Produto X</h2>
              <p>R$ 60,00</p>
            </div>
            <div className='button-container'>
              <button>Editar</button>
              <button>Remover</button>
            </div>
          </ProductCard>
          <ProductCard>
            <Image src={VercelIcon} alt='Produto' />
            <div className='product-details'>
              <h2>Produto X</h2>
              <p>R$ 60,00</p>
            </div>
            <div className='button-container'>
              <button>Editar</button>
              <button>Remover</button>
            </div>
          </ProductCard>
          <ProductCard>
            <Image src={VercelIcon} alt='Produto' />
            <div className='product-details'>
              <h2>Produto X</h2>
              <p>R$ 60,00</p>
            </div>
            <div className='button-container'>
              <button>Editar</button>
              <button>Remover</button>
            </div>
          </ProductCard>
          <ProductCard>
            <Image src={VercelIcon} alt='Produto' />
            <div className='product-details'>
              <h2>Produto X</h2>
              <p>R$ 60,00</p>
            </div>
            <div className='button-container'>
              <button>Editar</button>
              <button>Remover</button>
            </div>
          </ProductCard>
        </ProductsSection>
      </DashboardSection>
    </Container>
  )
}

export default Dashboard
