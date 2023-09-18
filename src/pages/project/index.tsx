import React from 'react'
import { Container, Flex, Text, HStack, Box } from '@chakra-ui/react'
import 'react-multi-carousel/lib/styles.css'
import Navbar from '@components/Navbar'
import ProjectCard from '@components/modules/cards/ProjectCard'

const projectList = [
  { id: 1, title: 'Sofdulur', imgSrc: '/assets/projects/softdulur.png', link: 'https://softdulur-landing-git-main-albarmo.vercel.app', description: '' },
  { id: 2, title: 'Plagams', imgSrc: '/assets/projects/plagams.png', link: 'https://www.plagams.store', description: 'plagams official store. Nexts, Nodejs, Postgres SQL' },
  { id: 3, title: 'Magin Official Website', imgSrc: '/assets/projects/magin.png', link: 'https://s-magin-app.vercel.app', description: 'Kids clothes online shop. Nextjs, Nodejs, Postgres SQL' },
  { id: 4, title: 'The Way', imgSrc: '/assets/projects/theway.png', link: '/un-published', description: 'Goal Trackers App' },
  { id: 5, title: 'Terserahin (UI/UX)', imgSrc: '/assets/projects/terserahin.png', link: 'https://www.figma.com/file/zJDt3yvop9JcRNZhodidYd/Ters erahin?type=design&node- id=103%3A52141&mode=design&t=LCZvuo8kbFbkyS\n-1', description: 'Place and food recomendation' },
  { id: 6, title: 'KulturLokal', imgSrc: '/assets/projects/kulturlokal.png', link: 'https://www.kulturlokal.id', description: '' },
  { id: 7, title: 'Semangatbaik', imgSrc: '/assets/projects/semangatbaik.png', link: 'http://semangatbaik.com', description: '' },
  { id: 8, title: 'Teskarir', imgSrc: '/assets/projects/teskarir.png', link: 'https://teskarir.com', description: 'psychological test website to determine career pathways. Qore, React, SCSS' },
]


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
             My project experience
            </Text>
            <Box mt="10" className="mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-1">
                {projectList.map((project: any, index: number) => (
                  <ProjectCard hasTitle={true} key={index} project={project} />
                ))}
              </div>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </>
  )
}

export default ProjectDetail
