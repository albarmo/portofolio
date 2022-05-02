import React from 'react'
import { Box, Container, Flex, Text, Image } from '@chakra-ui/react'
import Lottie from 'react-lottie'
import animationData from '../../../../public/assets/shape-geometrics.json'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const Introduction: React.FC = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8.5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6.3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3.1,
    },
  }

  const SquareCard: React.FC<{ item: any }> = ({ item }) => {
    return (
      <Box>
        <Image
          boxSize="80px"
          objectFit="cover"
          src="https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png"
          alt={item}
        />
      </Box>
    )
  }

  return (
    <Container className="container xs:pt-8 sm:pt-10 xl:p-20 xs:w-5/6 xs:bg-blue-400 sm:bg-red-50 items-center text-white">
      <Flex
        w={['100vw', '100vw', 'container.sm', 'container.md', 'container.lg']}
        justifyContent="space-between"
        className="xs:flex-col-reverse sm:flex-row"
        align="center"
      >
        <Box p={[10, 5, 5]}>
          <Text className="text-3xl font-bold">#Albarms</Text>
          <Text className="text-custom-yellow">I am a Softawe Engineer</Text>
          <Text className="w-2/4 xs:w-full text-justify">
            I Love to code. Creativity Design, Adventures, I'm a software
            developer, i like to learn a new things and solve challenge with a
            creativity
          </Text>
        </Box>
        <Box bg="red">
          <Lottie options={defaultOptions} width={350} />
        </Box>
      </Flex>
      <Box
        p={[5, 15, 5]}
        w={['400px', '100%', 'container.sm', 'container.sm', 'container.lg']}
      >
        <Text className="text-custom-yellow mb-5">Tech Stack</Text>
        <Carousel responsive={responsive}>
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']?.map(
            (item: any, index: number) => (
              <SquareCard key={index} item={item} />
            ),
          )}
        </Carousel>
      </Box>
    </Container>
  )
}

export default Introduction
