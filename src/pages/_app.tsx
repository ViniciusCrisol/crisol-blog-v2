import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import theme from '../styles/theme'
import GlobalStyles from '../styles/global'

import Header from '../components/Header'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Header />
    <Component {...pageProps} />
    <GlobalStyles />
  </ThemeProvider>
)

export default MyApp
