import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { APP_NAME } from '@/core/constants'
import PageLayout from '@/core/components/PageLayout'

import GlobalStyle from '@/assets/styles/global'
import theme from '@/assets/styles/theme'

import '@/assets/styles/sanitize.css'

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <ThemeProvider theme={theme}>
      <PageLayout title={APP_NAME}>    
        <Component {...pageProps} />
        <GlobalStyle />
      </PageLayout>
    </ThemeProvider>
  )
}
