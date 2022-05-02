import React from 'react'
import type { NextPage } from 'next'
import { Box, Container, Flex, Text, Image, HStack } from '@chakra-ui/react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ProjectCard from '@components/modules/cards/ProjectCard'

const ProjectShowcase: React.FC = () => {
  const responsiveProject = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2.5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2.3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1.6,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <Container
      h="60vh"
      className="xs:pt-0 container sm:pt-10 xl:p-20 items-center text-white"
    >
      <Flex
        w={['100%', '90%', 'container.sm', 'container.md', 'container.lg']}
        justifyContent="space-between"
        className="xs:flex-col-reverse sm:flex-row"
        align="center"
      >
        <Box>
          <HStack>
            <Text className="text-4xl font-bold">#Project</Text>
            <Text className="text-4xl font-bold text-custom-yellow ">
              Showcase
            </Text>
          </HStack>
          <Text className="text-gray-500 mt-3 xs:text-center sm:text-left">
            Boleh diliat liat dulu kakak..
          </Text>
        </Box>
      </Flex>
      <Box
        mt={[0, 0, 0]}
        w={['85vw', '100%', 'container.sm', 'container.md', 'container.lg']}
        p={[0, 5, 0]}
      >
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
