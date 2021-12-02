import { HeaderContainer } from './style'
import Link from 'next/link'
import Image from 'next/image'

import VercelIcon from '/public/vercel.svg'
import { FaUserCircle } from 'react-icons/fa'

const Header = () => {
  const userLogged = false

  return (
    <HeaderContainer>
      <p>AnunX</p>
      <div>
        <Link href='/user/publish' passHref>
          <button>Anunciar e Vender</button>
        </Link>
        <div className='user-container'>
          {userLogged ? (
            <Image src={VercelIcon} alt='User picture' width={100} />
          ) : (
            <FaUserCircle color='white' size={32} />
          )}
          <strong>Gabriel Bittencourt</strong>
        </div>
      </div>
    </HeaderContainer>
  )
}

export default Header
