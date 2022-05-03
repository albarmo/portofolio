import React from 'react'
import { Container, Flex, Text, Image, Center } from '@chakra-ui/react'
import 'react-multi-carousel/lib/styles.css'
import Head from 'next/head'
import Script from 'next/script'

const Hero: React.FC = () => {
  const Parallax = require('parallax-js')
  React.useEffect(() => {
    if (document) {
      var scene1 = document.getElementById('scene1')
      var scene2 = document.getElementById('scene2')
      var scene3 = document.getElementById('scene3')
      new Parallax(scene1)
      new Parallax(scene2)
      new Parallax(scene3)
    }
  }, [Parallax])

  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"></Script>
      <Container className="container-gradient xs:pt-8 sm:pt-20 p-10 items-center text-white">
        <div id="scene1">
          <div data-depth="0.3">
            <Center className="xs:mb-10 sm:mb-0">
              <Image
                src="/assets/space-star1.png"
                alt="moon"
                className="w-full"
                position="absolute"
                opacity="40%"
              />
            </Center>
          </div>
        </div>
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
              <div id="scene2">
                <div data-depth="0.8">
                  <Text fontSize="lg">Saturn</Text>
                  <Text fontSize={['2xl', '3xl', '4xl']} fontWeight="bold">
                    Inspired by love and guided by knowledge
                  </Text>
                  <Text fontSize="sm" mt="3">
                    - Bertrand Russell
                  </Text>
                </div>
              </div>
            </Flex>

            <div id="scene3">
              <div data-depth="0.8">
                <Center className="xs:mb-10 sm:mb-0">
                  <Image
                    src="/assets/planet-04.png"
                    alt="moon"
                    className="xs:w-60 sm:w-80 lg:w-96"
                  />
                </Center>
              </div>
            </div>
          </Flex>
        </Center>
      </Container>
    </>
  )
}

export default Hero
