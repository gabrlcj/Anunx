import type { AppProps } from 'next/app'
import { GlobalStyles } from '../../styles/global'
import Footer from '../components/Footer'
import Header from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
