import React from 'react'
import { Container, Flex, Text, HStack, Box } from '@chakra-ui/react'
import 'react-multi-carousel/lib/styles.css'
import Navbar from '@components/Navbar'
import ProjectShowcase from '@components/modules/displays/ProjectShowCase'
import ProjectCard from '@components/modules/cards/ProjectCard'

const ProjectDetail: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container
        minH="100vh"
        className="container-mini-gradient xs:pt-8 sm:pt-20 p-20 items-center text-white"
      >
        <Flex
          w={['90vw', '100%', 'container.sm', 'container.sm', 'container.lg']}
          justifyContent="space-between"
          className="xs:flex-col-reverse sm:flex-row"
        >
          <Flex
            mt="80px"
            w="full"
            className="flex-col justify-center items-start"
          >
            <HStack>
              <Text fontSize="md" fontWeight="semibold">
                Current Projects #12 -
              </Text>
              <Text fontSize="sm">Projects</Text>
            </HStack>
            <Text fontSize={['2xl', '3xl', '4xl']} fontWeight="bold">
              My Works
            </Text>
            <Text fontSize="sm" mt="3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu
              turpis eget magna iaculis suscipit. Vivamus iaculis mauris nulla,
              ac malesuada elit posuere nec. Nulla facilisi. Aliquam erat
              volutpat. Duis sodales, leo faucibus fermentum feugiat, lectus
              nibh pretium tortor, at sagittis ligula turpis a tellus. Nulla
              facilisi. Aliquam erat volutpat. Duis sodales, leo faucibus
              fermentum feugiat, lectus nibh pretium tortor, at sagittis ligula
              turpis a tellus. Ut ex mi, scelerisque ac scelerisque id, finibus
              sed odio. Pellentesque bibendum at dolor ac dignissim. Etiam id
              volutpat elit, a volutpat orci. Praesent at convallis orci.
            </Text>
            <Box mt="10" className="mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-1">
                <ProjectCard item={'1'} hasTitle={true} />
                <ProjectCard item={'1'} hasTitle={true} />
                <ProjectCard item={'1'} hasTitle={true} />
                <ProjectCard item={'1'} hasTitle={true} />
                <ProjectCard item={'1'} hasTitle={true} />
                <ProjectCard item={'1'} hasTitle={true} />
                <ProjectCard item={'1'} hasTitle={true} />
              </div>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </>
  )
}

export default ProjectDetail
