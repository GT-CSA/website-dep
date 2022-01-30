import { Box, Button, Center, Flex, Link, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import CSALogo from '../assets/Logo.svg'

const Navbar: React.FC = () => {
  return (
    <Flex
      justifyContent="space-between"
      height={156}
      backgroundColor="#F8F8F8"
      width="99vw"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      alignItems="center"
    >
      <Flex flexDirection="row" alignItems="center">
        <Box ml="36px" mr="24px">
          <Image src={CSALogo} width={116} height={116} alt="CSA Logo" />
        </Box>
        <Flex flexDirection="column">
          <Text
            textTransform="uppercase"
            fontWeight={400}
            fontSize={24}
            color="#D14E60"
            lineHeight="22px"
          >
            Georgia Tech
          </Text>
          <Text
            textTransform="uppercase"
            fontSize={18}
            color="#b8b8b8"
            lineHeight="20px"
          >
            Chinese
            <br />
            Student
            <br />
            Association
          </Text>
        </Flex>
      </Flex>
      <Flex flexDirection="row" mr="36px">
        <Button
          textTransform="uppercase"
          alignItems="center"
          backgroundColor="#D14E60"
          _hover={{ bg: '#a32c3d' }}
          color="white"
          fontWeight={400}
          borderLeftRadius="70px"
          borderRightRadius="0px"
          height="52px"
          pl="40px"
          pr="20px"
        >
          Menu
        </Button>
        <Button
          textTransform="uppercase"
          backgroundColor="#D14E60"
          _hover={{ bg: '#a32c3d' }}
          color="white"
          fontWeight={400}
          borderRadius="0"
          height="52px"
          px="20px"
        >
          About Us
        </Button>
        <Button
          textTransform="uppercase"
          backgroundColor="#D14E60"
          _hover={{ bg: '#a32c3d' }}
          color="white"
          fontWeight={400}
          borderRadius="0"
          height="52px"
          px="20px"
        >
          Get Involved
        </Button>
        <Button
          textTransform="uppercase"
          backgroundColor="#D14E60"
          _hover={{ bg: '#a32c3d' }}
          color="white"
          fontWeight={400}
          borderRadius="0"
          height="52px"
          px="20px"
        >
          Board Members
        </Button>
        <Button
          textTransform="uppercase"
          backgroundColor="#D14E60"
          _hover={{ bg: '#a32c3d' }}
          color="white"
          fontWeight={400}
          borderLeftRadius="0px"
          borderRightRadius="50px"
          height="52px"
          pr="40px"
        >
          Contact Us
        </Button>
      </Flex>
    </Flex>
  )
}

export default Navbar
