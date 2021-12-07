import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Container } from '../../../styles/container'
import { DashboardSection, ProductsSection } from './dashboardStyle'
import Card from '../../components/Card'

const Dashboard: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Dashboard | AnunX</title>
      </Head>

      <DashboardSection>
        <h1>Meus Anúncios</h1>
        <Link href='/user/publish' passHref>
          <button>Publicar novo anúncio</button>
        </Link>
        <ProductsSection>
          <Card
            image={
              'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            }
            title='Produto X'
            subtitle='R$ 60,00'
            actions={
              <>
                <button>Editar</button>
                <button>Excluir</button>
              </>
            }
          />
          <Card
            image={
              'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            }
            title='Produto X'
            subtitle='R$ 60,00'
            actions={
              <>
                <button>Editar</button>
                <button>Excluir</button>
              </>
            }
          />
          <Card
            image={
              'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            }
            title='Produto X'
            subtitle='R$ 60,00'
            actions={
              <>
                <button>Editar</button>
                <button>Excluir</button>
              </>
            }
          />
          <Card
            image={
              'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            }
            title='Produto X'
            subtitle='R$ 60,00'
            actions={
              <>
                <button>Editar</button>
                <button>Excluir</button>
              </>
            }
          />
        </ProductsSection>
      </DashboardSection>
    </Container>
  )
}

export default Dashboard
