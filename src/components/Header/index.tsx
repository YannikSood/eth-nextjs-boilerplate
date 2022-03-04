/* eslint-disable @next/next/no-img-element */
import NextLink from 'next/link'

import { Box, Flex, HStack, Stack, Text } from '@chakra-ui/layout'
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  Button,
  Link
} from '@chakra-ui/react'
import Davatar from '@davatar/react'
import {
  InformationCircleIcon,
  LoginIcon,
  MenuIcon,
  XIcon
} from '@heroicons/react/outline'
import { useConnect, useAccount, defaultChains, defaultL2Chains } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { WalletLinkConnector } from 'wagmi/connectors/walletLink'
import { shorten } from '../../utils/shorten.ts'
import { NavButton } from './NavButton'
import { NavDrawerItem, NavItem } from './NavItem'

// @ts-ignore
import { SocialIcon } from 'react-social-icons'

export const Header = () => {
  const [{ data: connectData, error: connectError, loading: connectLoading }, connect] = useConnect()
  const [{ data: accountData, error: accountError, loading: accountLoading }] = useAccount({
    fetchEns: true,
  })

  const connector = new InjectedConnector({
    chains: [...defaultChains, ...defaultL2Chains],
  })

  const walletConnector = new WalletConnectConnector({
    options: {
      qrcode: true,
    },
  })

  const linkConnector = new WalletLinkConnector({
    options: {
      appName: 'Mirror.xyz',
      jsonRpcUrl: 'https://mainnet.infura.io/v3',
    },
  })

  const { isOpen, onOpen, onClose, onToggle } = useDisclosure()

  const navItems = [
    {
      text: 'home',
      href: '/'
    },
    {
      text: 'about',
      href: '/about',
      icon: <InformationCircleIcon className="h-6 w-6" />
    },
    {
      text: '404 page',
      href: '/error',
      icon: <InformationCircleIcon className="h-6 w-6" />
    }
  ]



  return (
    <header>
      <Stack direction={['column', 'column', 'row']} px={2} py={4}>
        <HStack
          justifyContent={['space-between']}
          w={'full'}
          px={{ base: 0, lg: '2rem' }}
        >
          <Box fontWeight="bold" fontSize={[20, 20, 20]}>
            <NextLink href="/" passHref>
              <Link className="center flex gap-2">
                <span>👽</span>
                <span className="text-xl">ilyxium</span>
              </Link>
            </NextLink>
          </Box>

          <HStack>
            <HStack
              px={[4, 4, 0]}
              display={['none', 'none', 'none', 'flex']}
              gap={{ lg: '0.4rem', xl: '1.5rem' }}
              mr={4}
            >
              {navItems.map((navItem, index) => (
                <NavItem key={index} href={navItem.href}>
                  <Text className="capitalize">{navItem.text}</Text>
                </NavItem>
              ))}
            </HStack>

            {/* Connect Wallet Button */}
            <NavButton ml="30px" onClick={() => connect(connector)}>
              {accountData && accountData.address ? (
                <>
                  <Box>
                    <Davatar size={25} address={accountData.address} />
                  </Box>
                  <Text>{shorten(accountData.address)}</Text>
                </>
              ) : (
                <>
                  <Text className="capitalize">{'connect'}</Text>
                  <LoginIcon className="w-5 h-5" />
                </>
              )}
            </NavButton>

            {/* Drawer Toggle Button */}
            <Button
              backgroundColor="transparent"
              display={['flex', 'flex', 'flex', 'none']}
              color="white"
              _hover={{
                backgroundColor: '#121212'
              }}
              borderRadius="100%"
              onClick={onOpen}
            >
              {isOpen ? (
                <XIcon className="w-5 h-5" />
              ) : (
                <MenuIcon className="w-5 h-5" />
              )}
            </Button>
          </HStack>
        </HStack>
      </Stack>

      {/* Mobile Navbar */}
      <Drawer
        placement={'top'}
        isFullHeight={true}
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody background="#1F1B24" px={2}>
            {/* Top Wrapper */}
            <Box
              fontWeight="bold"
              display="flex"
              justifyContent="space-between"
              width="100%"
              paddingX="0.5rem"
              paddingTop="0.5rem"
              marginBottom="3rem"
              fontSize={[20, 20, 20]}
            >
              {/* Alien Logo */}
              <NextLink href="/">
                <Link className="center flex gap-2">
                  <span>👽</span>
                  <span className="text-xl">ilyxium</span>
                </Link>
              </NextLink>

              {/* Wallet and Close Button Wrapper */}
              <Flex gap="0.5rem">
                {/* Connect Wallet Button */}
                <NavButton ml="30px" onClick={() => connect(connector)}>
                  {accountData && accountData.address ? (
                    <>
                      <Box>
                        <Davatar size={25} address={accountData.address} />
                      </Box>
                      <Text>{shorten(accountData.address)}</Text>
                    </>
                  ) : (
                    <>
                      <Text className="capitalize">{'connect'}</Text>
                      <LoginIcon className="w-5 h-5" />
                    </>
                  )}
                </NavButton>

                {/* Close Icon */}
                <Button
                  backgroundColor="transparent"
                  color="white"
                  paddingX={0}
                  _hover={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)'
                  }}
                  borderRadius="100%"
                  onClick={onToggle}
                >
                  <XIcon className="w-7 h-7" />
                </Button>
              </Flex>
            </Box>

            {/* Mapping through Links */}
            {navItems.map((navItem, index) => (
              <NavDrawerItem onClick={onToggle} key={index} href={navItem.href}>
                <Flex alignItems="center" gap={2}>
                  <Text padding="0" fontSize={'2rem'}>
                    {navItem.text}
                  </Text>
                </Flex>
              </NavDrawerItem>
            ))}
            {/* Twitter and Language Menu Wrapper */}
            <Flex
              width="100%"
              justify="space-between"
              bottom="2rem"
              alignItems="center"
              left="0"
              paddingX="1.5rem"
              position="absolute"
            >
              {/* Twitter Link - URL SHOULD BE UPDATED */}
              <SocialIcon bgColor="white" url="https://twitter.com/ilyxium" target="_blank" />

            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </header>
  )
}
