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
    <Container
      h="90vh"
      className="xs:pt-8 container sm:pt-20 xl:p-20 items-center text-white"
    >
      <Flex
        w={['100vw', '100vw', 'container.sm', 'container.md', 'container.lg']}
        justifyContent="space-evenly"
        className="xs:flex-col-reverse sm:flex-row"
        align="center"
      >
        <Box
          position={['absolute', 'static']}
          className="lg:static"
          opacity={['40%', '60%', '100%']}
        >
          <Lottie options={flowAnimationSetting} width={350} />
        </Box>
        <Box
          p={[5, 15, 5]}
          w={['400px', '100%', 'container.sm', 'container.sm', 'container.lg']}
          className="lg:w-2/6 xs:bg-red.50"
        >
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
