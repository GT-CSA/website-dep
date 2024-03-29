import { Box, Center, ChakraProvider, Flex, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import background from '../assets/Background.png'

const Home: NextPage = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        backgroundImage="url('/Background.png')"
        minH="calc(100vh - 156px)"
        width="100vw"
        backgroundSize="100%"
        padding="0px"
        mx="-1px"
        border="none"
        overflow="hidden"
        backgroundPosition="bottom"
        backgroundRepeat="no-repeat"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Text fontSize="72px" textTransform="uppercase" color="white">
          Welcome!
        </Text>
        <Text fontSize="40px" textTransform="uppercase" color="white">
          你好!
        </Text>
      </Flex>

      {/* <Box>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </Box> */}

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </ChakraProvider>
  )
}

export default Home
