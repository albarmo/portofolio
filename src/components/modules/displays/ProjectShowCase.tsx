import React from 'react'
import type { NextPage } from 'next'
import { Box, Container, Flex, Text, Image, HStack } from '@chakra-ui/react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ProjectCard from '@components/ProjectCard'

const ProjectShowcase: React.FC = () => {
  const responsiveProject = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2.6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.2,
    },
  }

  return (
    <Container className="xs:pt-8 container sm:pt-20 xl:p-20 items-center text-white">
      <Flex
        w="container.xl"
        justifyContent="space-between"
        className="xs:flex-col-reverse sm:flex-row"
        align="center"
      >
        <Box>
          <HStack>
            <Text className="text-4xl font-bold">#Project</Text>{' '}
            <Text className="text-4xl font-bold text-custom-yellow">
              Showcase
            </Text>
          </HStack>
          <Text className="text-gray-500 mt-3">
            Boleh diliat liat dulu kakak..
          </Text>
        </Box>
      </Flex>
      <Box mt="10">
        <Text className="text-custom-yellow mb-5">Tech Stack</Text>
        <Carousel responsive={responsiveProject}>
          {['1', '2', '3', '4', '5']?.map((item: any, index: number) => (
            <ProjectCard item={item} />
          ))}
        </Carousel>
      </Box>
    </Container>
  )
}

export default ProjectShowcase
