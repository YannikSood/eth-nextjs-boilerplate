import type { NextPage } from 'next'

import { Heading, Flex, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'

const About: NextPage = () => {

  return (
    <Flex
      direction="row"
      width="100%"
      height="90%"
      alignItems="center"
      justifyContent="space-between"
      padding="2rem"
    >
      <Flex
        width="66%"
        height="100%"
        direction="column"
        justifyContent="space-between"
        gap="3rem"
      >
          <Heading>
              About Page
          </Heading>

          <Text>
              With this boilerplate, you get a 👉mobile friendly👈 DApp, a few example pages, a scalable header,
              the wallet connection + one example transaction done for you🤌.
          </Text>

          <Text>
              I built this because every boilerplate I found is made by a company looking to push their service, so they integrate their service/product into everything and make it unusable.
              Fuck that.
          </Text>

      </Flex>
    </Flex>
  )
}

export default About
