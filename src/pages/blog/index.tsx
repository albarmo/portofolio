import React from 'react'
import { Container, Flex, Text, HStack, Box } from '@chakra-ui/react'
import 'react-multi-carousel/lib/styles.css'
import Navbar from '@components/Navbar'
import BlogCard from '@components/modules/cards/TitleCard'

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
                Article #12 -
              </Text>
              <Text fontSize="sm">Blogs</Text>
            </HStack>
            <Text fontSize={['2xl', '3xl', '4xl']} fontWeight="bold">
              My Writings
            </Text>
            <Text fontSize="sm" mt="3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu
              turpis eget magna iaculis suscipit. Vivamus iaculis mauris nulla,
              ac malesuada elit posuere nec. Nulla facilisi. Aliquam erat
              volutpat. Duis sodales, leo faucibus fermentum feugiat, lectus
              nibh pretium tortor, at sagittis ligula turpis a tellus. Nulla
              facilisi.
            </Text>
            <Box mt="10" className="mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-1">
                <BlogCard item={'1'} />
                <BlogCard item={'1'} />
                <BlogCard item={'1'} />
                <BlogCard item={'1'} />
                <BlogCard item={'1'} />
                <BlogCard item={'1'} />
                <BlogCard item={'1'} />
              </div>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </>
  )
}

export default ProjectDetail
