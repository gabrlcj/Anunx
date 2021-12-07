import type { NextPage } from 'next'
import Head from 'next/head'
import { IoSearchSharp } from 'react-icons/io5'
import { Container } from '../../../styles/container'
import Card from '../../components/Card'
import { ListSection } from './listStyle'

const List: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Products List | AnunX</title>
      </Head>

      <ListSection>
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

        <div className='announcement-container'>
          <h4>Anúncios</h4>
          <strong>Encontrados 200 anúncios</strong>
          <div className='products-container'>
            <Card
              image={
                'https://images.unsplash.com/photo-1627483262769-04d0a1401487?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              }
              title='Produto 1'
              subtitle='R$ 60,00'
            />
            <Card
              image={
                'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80'
              }
              title='Produto 2'
              subtitle='R$ 60,00'
            />
            <Card
              image={
                'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              }
              title='Produto 3'
              subtitle='R$ 60,00'
            />
          </div>
        </div>
      </ListSection>
    </Container>
  )
}

export default List
