import React from 'react'
import { Text, Flex, Box, Image, Stack } from '@chakra-ui/react'
import MenuDrawer from './Drawer'

const Navbar: React.FC = () => {
  return (
    <Flex
      bg="rebeccapurple"
      justify="space-between"
      alignItems="center"
      p="5"
      pl="10"
      pr="10"
      className="absolute w-full bg-transparent"
    >
      <Box>
        <Text
          className="showme"
          fontSize="xl"
          fontWeight="bold"
          textColor="white"
          cursor="help"
        >
          Albarms.
        </Text>
        <Image id="hideme" w="100px" src="/assets/this-guy.png" />
      </Box>
      <MenuDrawer />
    </Flex>
  )
}

export default Navbar
