import React from 'react'
import { Container, Flex, Text, Image, Center } from '@chakra-ui/react'
import 'react-multi-carousel/lib/styles.css'

const Hero: React.FC = () => {
  return (
    <Container className="container-gradient xs:pt-8 sm:pt-20 p-10 items-center text-white">
      <Center mt="20">
        <Flex
          w="container.lg"
          justifyContent="space-between"
          className="xs:flex-col-reverse sm:flex-row"
        >
          <Flex
            mt={[20, 0]}
            className="flex-col justify-center items-start max-w-md"
          >
            <Text fontSize="lg">Saturn</Text>
            <Text fontSize={['2xl', '3xl', '4xl']} fontWeight="bold">
              Inspired by love and guided by knowledge
            </Text>
            <Text fontSize="sm" mt="3">
              - Bertrand Russell
            </Text>
          </Flex>
          <Center className="xs:mb-10 sm:mb-0">
            <Image
              src="/assets/planet-04.png"
              alt="moon"
              className="xs:w-60 sm:w-80 lg:w-96"
            />
          </Center>
        </Flex>
      </Center>
    </Container>
  )
}

export default Hero
