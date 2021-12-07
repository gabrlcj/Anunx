import type { NextPage } from 'next'
import Head from 'next/head'

import { Container } from '../../../styles/container'
import { ProductSection } from './productStyle'
import { FaUserCircle } from 'react-icons/fa'
import Carousel from '../../components/Carousel'
import { SliderData } from '../../components/Carousel/SliderData'

const Product: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Product | AnunX</title>
      </Head>

      <ProductSection>
        <section>
          <div className='carousel-container'>
            <Carousel slides={SliderData} />
          </div>
          <div className='product-title'>
            <span>Publicado 16 de junho de 2021</span>
            <h3>Jaguar XE 2.0 D R-Sport Aut.</h3>
            <h4>R$ 50.000,00</h4>
            <small>Categoria</small>
          </div>
          <div className='product-description'>
            <h4>Descrição</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              iure ea ipsum similique deserunt eius voluptates sequi voluptate
              sint dolorum, facilis quis amet accusantium officiis quaerat
              voluptatem magni, laudantium blanditiis! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Commodi pariatur expedita
              ullam, labore minima quia iusto placeat ea assumenda ipsum
              voluptatem sequi obcaecati! Quisquam omnis inventore tempore
              necessitatibus, officia modi!
            </p>
          </div>
        </section>
        <aside>
          <div className='product-owner'>
            <FaUserCircle size={42} color={'grey'} />
            <div>
              <p>Gabriel Bittencourt</p>
              <small>gabriel@email.com</small>
            </div>
          </div>
          <div>
            <h4>Localização</h4>
          </div>
        </aside>
      </ProductSection>
    </Container>
  )
}

export default Product
