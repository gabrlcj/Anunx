import type { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import { GlobalStyles } from '../../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ToastContainer autoClose={3000} position='top-right' />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
