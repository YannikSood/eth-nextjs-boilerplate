import { FC } from 'react'
import { Flex } from '@chakra-ui/layout'
import { Header } from '../Header'
import Head from 'next/head'
// import { useWallet } from '../../context/wallet-provider'

export const Page: FC = ({ children }) => {
  // const { activateBrowserWallet, account } = useWallet()

  //Uncomment this if you want the wallet to connect as soon as the website loads
  // useEffect(() => {
  //   try {
  //     activateBrowserWallet()
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }, [activateBrowserWallet])

  return (
    <>
      <Head>
        <title>ilyxium</title>
        <meta name="description" content="Ethereum + Next.js DApp Boilerplate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex direction="column" backgroundColor="#1F1B24">
        <Header />
        <main>{children}</main>
        <Footer />
      </Flex>
    </>
  )
}

const Footer = () => {
  return <Flex height="10%"></Flex>
}
