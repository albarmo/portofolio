import React, { useEffect, useState } from 'react'
import { Container, Flex, Text, HStack, Image, Link } from '@chakra-ui/react'
import 'react-multi-carousel/lib/styles.css'
import Navbar from '@components/Navbar'
import ProjectShowcase from '@components/modules/displays/ProjectShowCase'
import { useRouter } from 'next/router'


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
  const router = useRouter()
  const { id } = router.query
  const [data, setData] = useState<any>()
 
 
  useEffect(() => {
    if (!id) return
    const project = projectList.find((projectItem) => projectItem.id == Number(id))
    setData(project)
  }, [id])


  return (
    <>
      <Navbar />
      <Container
        h='min'
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
                Projects #{id}
              </Text>
            </HStack>
            <Text fontSize={['2xl', '3xl', '4xl']} fontWeight="bold">
              {data?.title}
            </Text>
            <Text fontSize="sm" my="5">
              {data?.description}
            </Text>
            <Image
              w="420px"
              h="auto"
              objectFit="contain"
              src={data?.imgSrc}
              alt={data?.title}
            />
            <Link href={data?.link}  my="5">
              {data?.link}
            </Link>
          </Flex>
        </Flex>
      </Container>
      <ProjectShowcase />
    </>
  )
}

export default ProjectDetail
