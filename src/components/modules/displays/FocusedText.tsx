import React from 'react'
import { Box, Container, Flex, Text } from '@chakra-ui/react'
import Lottie from 'react-lottie'
import animationFlow from '../../../../public/assets/75794-diferencia-legal.json'
import 'react-multi-carousel/lib/styles.css'

const flowAnimationSetting = {
  loop: true,
  autoplay: true,
  animationData: animationFlow,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const FocusedText: React.FC = () => {
  return (
    <Container className="xs:pt-8 container sm:pt-20 xl:p-20 items-center text-white">
      <Flex
        w="container.xl"
        justifyContent="space-evenly"
        className="xs:flex-col-reverse sm:flex-row"
        align="center"
      >
        <Box w="40%">
          <Lottie options={flowAnimationSetting} width={350} />
        </Box>
        <Box className="w-2/6">
          <Text className="text-3xl font-bold">#Albarms</Text>
          <Text className="text-custom-yellow">I am a Softawe Engineer</Text>
          <Text className="text-justify mt-5">
            I Love to code. Creativity Design, Adventures, I'm a software
            developer, i like to learn a new things and solve challenge with a
            creativity
          </Text>
        </Box>
      </Flex>
    </Container>
  )
}

export default FocusedText
