//@ts-nocheck
import React from 'react'
import { Box, Container, Flex, Text, HStack } from '@chakra-ui/react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import TitleCard from '@components/modules/cards/TitleCard'

const Blogs: React.FC = () => {
  const responsiveBlogs = {
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

  const referenceList = [
    { id: 1, title: 'Things they didn’t teach you about Software Engineering', link: 'https://vadimkravcenko.com/shorts/things-they-didnt-teach-you/', writer: 'Vadim Kravcenko' },
    { id: 2, title: 'How I organize my Typescript types.', link: 'https://medium.com/mintbean-io/how-i-organize-my-typescript-types-d9ae7f3ac30f#:~:text=These%20can%20be%20kept%20in,locally%20in%20the%20specific%20directory', writer: 'Monarch Wadia' },
    { id: 3, title: 'Stop using “return null” in React', link: 'https://medium.com/@davidkelley87/stop-using-return-null-in-react-a2ebf08fc9cd', writer: 'David' },
    { id: 4, title: 'Avoiding “&&” in React’s Conditional Rendering', link: 'https://medium.com/@davidkelley87/avoiding-in-reacts-conditional-rendering-dec9eb61ee65', writer: 'David' },
    { id: 5, title: 'Use Infinite Scroll in React Like a Pro', link: 'https://medium.com/jotform-tech/use-infinitive-scroll-like-a-pro-e78d7d5a93a8', writer: 'Çağlayan Yanıkoğlu' },
    { id: 6, title: '10 Ways To Improve Your Next.js App Performance', link: 'https://medium.com/weekly-webtips/10-ways-to-improve-your-next-js-app-performance-8e6f81b32dac', writer: 'Malith Priyashan' },
    { id: 7, title: 'Build Resilient UIs: Frontend Architecture that doesnt suck!', link: 'https://dev.to/chad_r_stewart/frontend-architecture-and-tooling-that-will-lead-to-a-more-resilient-codebase-7ib', writer: 'Chad R. Stewart' },
    { id: 8, title: 'Code Colocation is King', link: 'https://koenvangilst.nl/blog/code-colocation-is-king', writer: 'Koen van Gilst' },
    { id: 9, title: 'Why you should ALWAYS use return before res.send in Express APIs and Applications', link: 'https://dev.to/adamkatora/why-you-should-always-use-return-before-ressend-in-express-apis-and-applications-k9k', writer: 'Adam Katora' },
    { id: 10, title: 'The Surprising Power of Documentation', link: 'https://vadimkravcenko.com/shorts/proper-documentation/', writer: 'Vadim Kravcenko' },
    { id: 11, title: 'Rules of Thumb for Software Development Estimations', link: 'https://vadimkravcenko.com/shorts/project-estimates/', writer: 'Vadim Kravcenko' },
  ]

  return (
    <Container
      h="100%"
      minH='60vh'
      className="xs:pt-0 xs:pb-20 container xl:p-20 xl:pt-0 items-center text-white"
    >
      <Flex
        w={['100%', '100%', 'container.sm', 'container.md', 'container.lg']}
        justifyContent="space-between"
        className="xs:flex-col-reverse sm:flex-row"
        align="center"
        p={[2, 0]}
      >
        <Box w="full">
          <Text className="text-4xl font-extrabold">#Readings</Text>
          <Text className="text-gray-500 mt-3">Sharing a article or books</Text>
        </Box>
      </Flex>
      <Box
        mt="10"
        pl={[3, 0]}
        w={['100%', '100%', 'container.sm', 'container.sm', 'container.lg']}
      >
        <Carousel responsive={responsiveBlogs}>
          {referenceList.map((item: any, index: number) => (
            <TitleCard key={index} item={item} />
          ))}
        </Carousel>
      </Box>
    </Container>
  )
}

export default Blogs
