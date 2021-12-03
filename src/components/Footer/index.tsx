import Link from 'next/link'
import { FooterContainer } from './style'

const Footer = () => {
  return (
    <FooterContainer>
      <div className='footer-text'>
        <Link href='#' passHref>
          <a>Ajuda e Contato</a>
        </Link>
        <Link href='#' passHref>
          <a>Dicas de Segurança</a>
        </Link>
        <Link href='#' passHref>
          <a>Plano Profissional</a>
        </Link>
      </div>
    </FooterContainer>
  )
}

export default Footer
