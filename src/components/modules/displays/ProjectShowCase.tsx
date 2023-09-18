//@ts-nocheck
import React from 'react'
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

  const projectList = [
    {id:1, title: 'Sofdulur', imgSrc: '/assets/projects/softdulur.png', link: 'https://softdulur-landing-git-main-albarmo.vercel.app', description: '' },
    {id:2, title: 'Plagams', imgSrc: '/assets/projects/plagams.png', link: 'https://www.plagams.store', description: 'plagams official store. Nexts, Nodejs, Postgres SQL' },
    {id:3, title: 'Magin Official Website', imgSrc: '/assets/projects/magin.png', link: 'https://s-magin-app.vercel.app', description: 'Kids clothes online shop. Nextjs, Nodejs, Postgres SQL' },
    {id:4, title: 'The Way', imgSrc: '/assets/projects/theway.png', link: '/un-published', description: 'Goal Trackers App' },
    {id:5, title: 'Terserahin (UI/UX)', imgSrc: '/assets/projects/terserahin.png', link: 'https://www.figma.com/file/zJDt3yvop9JcRNZhodidYd/Ters erahin?type=design&node- id=103%3A52141&mode=design&t=LCZvuo8kbFbkyS\n-1', description: 'Place and food recomendation' },
    {id:6, title: 'KulturLokal', imgSrc: '/assets/projects/kulturlokal.png', link: 'https://www.kulturlokal.id', description: '' },
    {id:7, title: 'Semangatbaik', imgSrc: '/assets/projects/semangatbaik.png', link: 'http://semangatbaik.com', description: '' },
    {id:8, title: 'Teskarir', imgSrc: '/assets/projects/teskarir.png', link: 'https://teskarir.com', description: 'psychological test website to determine career pathways. Qore, React, SCSS' },
  ]

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
        </Box>
      </Flex>
      <Box
        mt={10}
        w={['85vw', '100%', 'container.sm', 'container.md', 'container.lg']}
        p={[0, 5, 0]}
      >
        <Carousel responsive={responsiveProject}>
          {projectList.map((project: any, index: number) => (
            <ProjectCard hasTitle={true} key={index} project={project} />
          ))}
        </Carousel>
      </Box>
    </Container>
  )
}

export default ProjectShowcase
