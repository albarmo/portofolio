import React from 'react'
import { Box, Container, Flex, Text, HStack } from '@chakra-ui/react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import TitleCard from '@components/modules/cards/TitleCard'

const Extras: React.FC = () => {
  const responsiveExtras = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.4,
    },
  }

  return (
    <Container className="xs:pt-0 xs:pb-20 container xl:p-20 xl:pt-0 items-center text-white">
      <Flex
        w={['100%', '100%', 'container.sm', 'container.md', 'container.lg']}
        justifyContent="space-between"
        className="xs:flex-col-reverse sm:flex-row"
        align="center"
        p={[2, 0]}
      >
        <Box w="full">
          <Text className="text-4xl font-extrabold">#Extras</Text>
          <Text className="text-gray-500 mt-3">
            I'm just want to share everything for u..
          </Text>
        </Box>
      </Flex>
      <Box
        mt="10"
        pl={[3, 0]}
        w={['100%', '100%', 'container.sm', 'container.sm', 'container.lg']}
      >
        <Carousel responsive={responsiveExtras}>
          {['1', '2', '3', '4', '5']?.map((item: any, index: number) => (
            <TitleCard key={index} item={item} />
          ))}
        </Carousel>
      </Box>
    </Container>
  )
}

export default Extras
