import { Box, Center, Container, Text, Image } from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'

interface Props {
  item: any
  id: number
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

const textVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
}

function Card({  item, id }: Props) {
  return (
  <Box>
    <motion.div
        className="card-container bg-red"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div className="card mt-5 mr-10" variants={cardVariants}>
          <Image
            src={`/assets/planets/planet${id + 1}.png`}
            alt="moon"
            w={['900px', '100%']}
          />
        </motion.div>
        <motion.div variants={textVariants}>
          <Box w={['100%', '500px']} overflow="hidden">
            <Text fontSize="lg">{item.year} </Text>
            <Text fontSize={['xl', '2xl', '3xl']} fontWeight="bold">
             {item.title}
            </Text>
              <Text fontSize={'md'} fontWeight="light" color={'yellow'}>
             {item.jobTitle}
            </Text>
            <Text fontSize="sm" mt="3">
             {item.description}
            </Text>
          </Box>
        </motion.div>
      </motion.div>
    </Box>
  )
}

 const carrerList = [
    { title: 'PT. Entrepreneur Trust Digital', jobTitle: 'Frontend Developer', year: 'Apr 2023 - Present ', description: 'Asigned as Frontend Engineer on one biggest Bank in Indonesia (BRI). Jakarta Metropolitan Area, NextJS, Tailwind' },
    { title: 'Feedloop', year: '2021 - 2023',jobTitle: 'Software Engineer', description: 'Asigned as a team member of Qorebase App an Low-Code Platform by Feedloop, im also developing and maintaining client project' },
    { title: 'Everidea Interactive', jobTitle: 'Frontend Web Developer', year: '2021', description: 'Builiding official media platform Semangatbaik & Kulturlokal and profile page. Web Development · JavaScript · Web Design · Node.js' },
    { title: 'Gerakan Nasional 1000 Startup Digital',jobTitle: 'Fullstack Web Developer', year: '2020', description: 'Joined the start up team Teskarir, an web based app to scale and recomended carrer path. Web Development · JavaScript · Web Design · Node.js' }
  ] 

const ContentScroller: any = () => {
  return carrerList.map((item, index) => (
    <Container className="container text-white pb-20" key={index}>
      <Center>
        <Box display={'flex'} justifyContent="center" mt="20">
          <Card item={item} id={index} />
        </Box>
      </Center>
    </Container>
  ))
}

export default ContentScroller
