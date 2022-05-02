import React from 'react'
import { Box, Container, Flex, Text, HStack } from '@chakra-ui/react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import BlogCard from '@components/BlogCard'
import Layout from '@components/Layout'

const Blogs: React.FC = () => {
  const responsiveBlogs = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4.5,
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
    <Container className="xs:pt-8 container sm:pt-20 xl:p-20 xl:pt-0 items-center text-white">
      <Flex
        w="container.xl"
        justifyContent="space-between"
        className="xs:flex-col-reverse sm:flex-row"
        align="center"
      >
        <Box>
          <HStack>
            <Text className="text-4xl font-extrabold">#Blogs</Text>{' '}
          </HStack>
          <Text className="text-gray-500 mt-3">Sharing is caring..</Text>
        </Box>
      </Flex>
      <Box mt="10">
        <Carousel responsive={responsiveBlogs}>
          {['1', '2', '3', '4', '5']?.map((item: any, index: number) => (
            <BlogCard key={index} item={item} />
          ))}
        </Carousel>
      </Box>
    </Container>
  )
}

export default Blogs
