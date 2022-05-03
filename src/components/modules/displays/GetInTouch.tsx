import React from 'react'
import {
  Box,
  Container,
  Flex,
  Text,
  Image,
  HStack,
  IconButton,
  Button,
  Stack,
  useClipboard,
  useToast,
} from '@chakra-ui/react'
import 'react-multi-carousel/lib/styles.css'
import { BsDiscord, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'
import { useRouter } from 'next/router'
import Link from 'next/link'

const GetInTouch: React.FC = () => {
  const router = useRouter()
  const toast = useToast()
  const [value] = React.useState('albarm#2988')
  const { hasCopied, onCopy } = useClipboard(value)

  console.log(onCopy, hasCopied)

  return (
    <Container
      h="100vh"
      className="container xs:pt-8 sm:pt-20 xl:pt-0 items-center text-white"
    >
      <Flex
        justifyContent="space-evenly"
        className="xs:flex-col-reverse sm:flex-row"
      >
        <Image
          src="/assets/planet-02.png"
          alt="moon"
          left="-110"
          position="absolute"
          zIndex={1}
        />
        <Flex
          zIndex={2}
          className="flex-col justify-center items-start max-w-md"
          mt="100"
        >
          <Text fontSize="4xl" fontWeight="bold">
            Get In Touch
          </Text>
          <Stack direction="row" spacing={5} mt="5">
            <Button
              colorScheme="teal"
              variant="solid"
              onClick={() => router.push('/send-feedback')}
            >
              Send Feedback
            </Button>
          </Stack>
          <Box mt="10">
            <Text className="font-semibold text-white">Let's Connected!</Text>
            <HStack mt="3" spacing={5} alignItems="flex-start">
              <IconButton
                onClick={() => {
                  onCopy
                  toast({
                    title: `Copied discord id`,
                    status: 'info',
                    duration: 1000,
                    isClosable: true,
                    position: 'top',
                  })
                }}
                aria-label="facebook"
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: '#0D74FF' }}
                icon={<BsDiscord size="20px" color="white" />}
              />
              <Link passHref href="https://www.instagram.com/albrm_">
                <a target="_blank">
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: '#0D74FF' }}
                    icon={<BsInstagram size="20px" color="white" />}
                  />
                </a>
              </Link>
              <Link passHref href="https://github.com/albarmo">
                <a target="_blank">
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: '#0D74FF' }}
                    icon={<BsGithub size="20px" color="white" />}
                  />
                </a>
              </Link>

              <Link
                passHref
                href="https://www.linkedin.com/in/albar-moerhamsa-aa21681bb"
              >
                <a target="_blank">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: '#0D74FF' }}
                    icon={<BsLinkedin size="20px" color="white" />}
                  />
                </a>
              </Link>
            </HStack>
          </Box>
        </Flex>
      </Flex>
    </Container>
  )
}

export default GetInTouch
