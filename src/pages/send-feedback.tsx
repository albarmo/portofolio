import React from 'react'
import {
  Box,
  Container,
  Flex,
  Text,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react'
import 'react-multi-carousel/lib/styles.css'
import { useRouter } from 'next/router'

const FeedbackForm: React.FC = () => {
  const router = useRouter()
  return (
    <Container
      minH="100vh"
      className="container xs:pt-8 sm:pt-10 xl:p-20 xs:w-5/6 xs:bg-blue-400 sm:bg-red-50 items-center text-white"
    >
      <Flex
        w={['100vw', '100vw', 'container.sm', 'container.md', 'container.lg']}
        justifyContent="space-between"
        className="xs:flex-col-reverse sm:flex-row"
        align="center"
      >
        <Box p={[5, 5, 5]}>
          <Text className="text-3xl font-bold">#Your Feedback Maters</Text>
          <Text className="text-custom-yellow">Give me some feedback</Text>
          <Text className="w-2/4 xs:w-full text-justify mt-3">
            Collect user and teammates feedback and increase your communication.
            Discover what you will do at next step with customers feedback.
            Improve Communication. Your Changelog Free.
          </Text>
        </Box>
      </Flex>
      <Box
        p={[10, 15, 5]}
        w={['400px', '100%', 'container.sm', 'container.sm', 'container.lg']}
      >
        <Text className="text-custom-yellow mb-5">Fill the form</Text>
        <Box>
          <Input placeholder="Your e mail" mb="5" />
          <Input placeholder="Title" mb="5" />
          <Textarea placeholder="Type feedback heree.." mb="5" />
          <Button colorScheme="teal" size="md" mt="5">
            Send Feedback
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default FeedbackForm
