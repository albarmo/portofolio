import React from 'react'
import { Box, Container, Flex, Text, Image, Button } from '@chakra-ui/react'
import Lottie from 'react-lottie'
import animationData from '../../public/assets/404.json'
import 'react-multi-carousel/lib/styles.css'
import { useRouter } from 'next/router'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const NotFoundPage = () => {
  const router = useRouter()
  return (
    <Container
      h="100vh"
      className="container xs:pt-8 sm:pt-10 xl:p-20 xs:w-5/6 xs:bg-blue-400 sm:bg-red-50 items-center text-white"
    >
      <Box>
        <Lottie options={defaultOptions} width={[250, 250]} height={180} />
      </Box>
      <Flex
        w={['100vw', '100vw', 'container.sm', 'container.md', 'container.lg']}
        justifyContent="center"
        className="xs:flex-col-reverse sm:flex-row"
        align="center"
      >
        <Box p={[5, 5, 5]} w="100%" mt="10">
          <Text className="text-3xl font-bold text-center">
            We can't find the page you're looking for.
          </Text>

          <Text className="w-2/4 xs:w-full mt-5 text-center">
            The link you clicked may be broken or the page may have been
            removed. or maybe im on vacation
          </Text>
        </Box>
      </Flex>
      <Button mt="5" colorScheme="blue" onClick={() => router.push('/')}>
        Bring me back home
      </Button>
    </Container>
  )
}

export default NotFoundPage
