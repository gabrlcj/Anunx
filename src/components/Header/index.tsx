import { useState, useRef } from 'react'
import Link from 'next/link'

import { HeaderContainer } from './style'
import { FaUserCircle } from 'react-icons/fa'
import { useClickOutside } from '../../hooks/useClickOutside'

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const ref = useRef(null)

  const handleOpenMenu = () => setOpenMenu(!openMenu)

  const handleClickOutside = () => {
    handleOpenMenu()
  }

  useClickOutside(ref, handleClickOutside)

  return (
    <HeaderContainer>
      <nav className='header-nav'>
        <Link href='/' passHref>
          <p>AnunX</p>
        </Link>
        <div>
          <Link href='/user/publish' passHref>
            <button>Anunciar e Vender</button>
          </Link>
          <div className='user-container' onClick={handleOpenMenu}>
            <FaUserCircle color='white' size={28} />
            <strong>Gabriel Bittencourt</strong>
            {openMenu ? (
              <>
                <span className='arrow'></span>
                <nav ref={ref} className='menu-links'>
                  <Link href='/user/dashboard'>
                    <a>Meus anúncios</a>
                  </Link>
                  <Link href='/user/publish'>
                    <a>Publicar novo anúncio</a>
                  </Link>
                  <hr />
                  <Link href='#'>
                    <a>Sair</a>
                  </Link>
                </nav>
              </>
            ) : null}
          </div>
        </div>
      </nav>
    </HeaderContainer>
  )
}

export default Header
