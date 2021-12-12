import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Header from '../components/Header'

import { SessionProvider } from 'next-auth/react'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import { GlobalStyles } from '../../styles/global'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <GlobalStyles />
      <ToastContainer autoClose={3000} position='top-right' />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  )
}

export default MyApp
