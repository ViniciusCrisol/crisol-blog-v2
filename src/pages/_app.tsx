import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { initGA, logPageView } from '../lib/analytics'

import theme from '../styles/theme'
import GlobalStyles from '../styles/global'
import Header from '../components/Header'

declare global {
  interface Window {
    GA_INITIALIZED: any
  }
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default MyApp
