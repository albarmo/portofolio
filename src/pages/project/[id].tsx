import React from 'react'
import { Container, Flex, Text, HStack, Box } from '@chakra-ui/react'
import 'react-multi-carousel/lib/styles.css'
import Navbar from '@components/Navbar'
import ProjectShowcase from '@components/modules/displays/ProjectShowCase'

const ProjectDetail: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container
        minH="100vh"
        className="container-mini-gradient xs:pt-8 sm:pt-20 p-20 items-center text-white"
      >
        <Flex
          w={['400px', '100%', 'container.sm', 'container.sm', 'container.lg']}
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
                Projects #12 -
              </Text>
              <Text fontSize="sm">Projects #12</Text>
            </HStack>
            <Text fontSize={['2xl', '3xl', '4xl']} fontWeight="bold">
              Inspired by love and guided by knowledge
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
            <Box mt="10">
              <Text>
                Nulla facilisi. Aliquam erat volutpat. Duis sodales, leo
                faucibus fermentum feugiat, lectus nibh pretium tortor, at
                sagittis ligula turpis a tellus. Ut ex mi, scelerisque ac
                scelerisque id, finibus sed odio. Pellentesque bibendum at dolor
                ac dignissim. Etiam id volutpat elit, a volutpat orci. Praesent
                at convallis orci. Suspendisse sit amet efficitur elit. Morbi
                feugiat felis sem, posuere condimentum sapien luctus eget.
                Aliquam risus justo, pretium non sapien at, molestie lacinia
                erat. Vivamus tincidunt vehicula libero. Nam id condimentum
                felis. Aliquam ut fringilla tortor, id cursus risus. Duis in
                ultricies sem. Nullam lacus enim, vehicula eget arcu vitae,
                tincidunt cursus mi. Donec ut sem non urna tristique tempus quis
                at felis. Nam eget turpis quis quam sagittis fringilla non quis
                justo. Fusce consequat et justo auctor tristique. Vestibulum vel
                enim hendrerit orci vestibulum rutrum porta eget libero.
                Maecenas sit amet mattis ex. Fusce gravida elit ac tellus
                facilisis, vel pretium ante faucibus. Vivamus tincidunt porta
                lacus id rhoncus. Nam cursus justo sapien, quis tempus erat
                bibendum at. Etiam egestas hendrerit nulla, ac ornare sapien
                cursus ut. Aliquam ac nibh tellus. Nunc nec justo mi. Vestibulum
                a dignissim est. Integer congue, justo vel accumsan congue, eros
                enim commodo sem, non volutpat mauris leo venenatis nulla. Ut et
                est a ante euismod lobortis eu a nibh. Fusce lacus nulla,
                lacinia quis nisl ut, feugiat suscipit leo. Aliquam placerat,
                neque non blandit tincidunt, diam purus dignissim est, eu
                elementum nibh leo ac nibh. Nunc est neque, sollicitudin ac ex
                id, pretium congue tellus. Morbi consequat eget ex eu blandit.
                Suspendisse potenti. Maecenas urna diam, molestie venenatis nisi
                eu, ultrices mollis massa. Nunc eu purus dapibus, posuere ex
                eget, sollicitudin metus. Cras eu tellus quis dolor tincidunt
                tristique. Aliquam semper augue a nibh condimentum, eu auctor
                nunc facilisis. Donec suscipit massa risus, vel posuere quam
                hendrerit in. Donec elit velit, rutrum sed rhoncus quis,
                consequat nec purus. Nam egestas nisl porttitor, ornare lectus
                in, finibus urna. Nulla urna elit, feugiat et tempus et,
                pulvinar eget leo. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Nullam at mauris eget quam accumsan lobortis
                non ut nunc. Aenean pharetra congue massa, vitae ullamcorper
                eros efficitur quis. Pellentesque pretium leo at tellus rhoncus
                dapibus. Quisque odio sem, mollis vel dui at, ultricies aliquam
                risus. Proin non risus eget odio porttitor laoreet. Phasellus
                sed sollicitudin ex, nec molestie elit. Etiam consequat euismod
                feugiat. Nulla facilisi. Sed placerat metus cursus ipsum
                condimentum dignissim. Etiam pellentesque dui eget cursus
                blandit. Fusce imperdiet mollis tellus, in dictum purus. Ut sed
                nunc luctus, condimentum mi vel, porta ipsum. Generated 5
                paragraphs, 469 words, 3081 bytes of Lorem Ipsum
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Container>
      <ProjectShowcase />
    </>
  )
}

export default ProjectDetail
