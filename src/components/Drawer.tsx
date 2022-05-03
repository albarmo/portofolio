import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  Text,
  Box,
  Flex,
  HStack,
  Stack,
  IconButton,
} from '@chakra-ui/react'
import React from 'react'
import { HiMenuAlt2 } from 'react-icons/hi'
import { BsGithub, BsDiscord, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { useRouter } from 'next/router'

const MenuDrawer = () => {
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <HiMenuAlt2
        className="text-white cursor-pointer text-2xl hover:text-bold"
        onClick={onOpen}
      />

      <Drawer isOpen={isOpen} placement="right" size="xs" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="white" />
          <DrawerBody className="gradient-menu">
            {/* <Text
              mt="5"
              p="2"
              fontSize="2xl"
              fontWeight="semibold"
              textColor="white"
            >
              Hi There, know me first here..
            </Text> */}
            <Flex className="text-white mt-10 flex-col justify-evenly">
              <Stack className="cursor-pointer rounded p-3 hover:bg-gradient-to-r from-blue-500 to-blue-700 opacity-80">
                <Text
                  onClick={() => router.push('/')}
                  className="font-semibold"
                >
                  Homepage
                </Text>
              </Stack>
              <Stack className="cursor-pointer rounded p-3 hover:bg-gradient-to-r from-blue-500 to-blue-700 opacity-80">
                <Text
                  onClick={() => router.push('/project')}
                  className="font-semibold"
                >
                  Project Showcase
                </Text>
              </Stack>
              <Stack className="cursor-pointer rounded p-3 hover:bg-gradient-to-r from-blue-500 to-blue-700 opacity-80">
                <Text
                  onClick={() => router.push('/blog')}
                  className="font-semibold"
                >
                  Writings
                </Text>
              </Stack>
              <Stack className="cursor-pointer rounded p-3 hover:bg-gradient-to-r from-blue-500 to-blue-700 opacity-80">
                <Text
                  onClick={() => router.push('/contact')}
                  className="font-semibold"
                >
                  Contact
                </Text>
              </Stack>
            </Flex>

            <Box p="2" className="absolute bottom-0">
              <Text className="font-semibold text-white">Let's Connected!</Text>
              <HStack mt="3" spacing={5} alignItems="flex-start">
                <IconButton
                  aria-label="facebook"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  _hover={{ bg: '#0D74FF' }}
                  icon={<BsDiscord size="20px" color="white" />}
                />
                <IconButton
                  aria-label="github"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  _hover={{ bg: '#0D74FF' }}
                  icon={<BsInstagram size="20px" color="white" />}
                />
                <IconButton
                  aria-label="github"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  _hover={{ bg: '#0D74FF' }}
                  icon={<BsGithub size="20px" color="white" />}
                />
                <IconButton
                  aria-label="discord"
                  variant="ghost"
                  size="lg"
                  isRound={true}
                  _hover={{ bg: '#0D74FF' }}
                  icon={<BsLinkedin size="20px" color="white" />}
                />
              </HStack>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MenuDrawer
