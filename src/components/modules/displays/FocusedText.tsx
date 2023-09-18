//@ts-nocheck
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
          p={[10, 15, 5]}
          w={['400px', '100%', 'container.sm', 'container.sm', 'container.lg']}
          className="lg:w-3/6 xs:bg-red.50"
        >
          <Text className="text-3xl font-bold">#About</Text>
          <Text className="text-custom-yellow">#Thank you for visiting my profile.</Text>
          <Text className=" mt-5">
            I am  Web Developer with three years of experience developing, implementing and supporting websites for commercial and non-commercial clients. Strong experience with multiple programming languages required for website, web application and database development. Enjoy working as a team member, excellent communication, and interpersonal skills, self-motivated and proactive. Quick learner, strong reasoning, and problem-solving skills.
          </Text>
        </Box>
      </Flex>
    </Container>
  )
}

export default FocusedText
