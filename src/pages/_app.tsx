import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { WagmiProvider } from 'wagmi'
import { Page } from '../components/Page'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider autoConnect>
        <ChakraProvider theme={theme}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ChakraProvider>
    </WagmiProvider>
  )
}

export default MyApp
