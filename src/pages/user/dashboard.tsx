import type { NextPage } from 'next'
import Head from 'next/head'
import { Container } from '../../../styles/container'
import { DashboardSection, ProductsSection } from './dashboardStyle'
import Card from '../../components/Card'

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
          <Card
            image={VercelIcon}
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
            image={VercelIcon}
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
            image={VercelIcon}
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
            image={VercelIcon}
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
