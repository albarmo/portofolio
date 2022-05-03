import { Box, Center, Container, Text, Image } from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'

interface Props {
  emoji: string
  hueA: number
  hueB: number
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
const hue = (h: number) => `hsl(${h}, 100%, 50%)`

function Card({ emoji, hueA, hueB, id }: Props) {
  const randomizeBackground = `linear-gradient(306deg, ${hue(hueA)}, ${hue(
    hueB,
  )})`

  return (
    <Box>
      <motion.div
        className="card-container bg-red"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div className="card mt-5 mr-10" variants={cardVariants}>
          {/* <ProjectCard item={1} hasTitle={false} /> */}
          <Image
            src={`/assets/planets/planet${id + 1}.png`}
            alt="moon"
            w={['900px', '100%']}
          />
        </motion.div>
        <motion.div variants={textVariants}>
          <Box w={['100%', '500px']} overflow="hidden">
            <Text fontSize="lg">Saturn</Text>
            <Text fontSize={['xl', '2xl', '3xl']} fontWeight="bold">
              Inspired by love and guided by knowledge
            </Text>
            <Text fontSize="sm" mt="3">
              Experimenting with distilling swipe offset and velocity into a
              single variable, so the * less distance a user has swiped, the
              more velocity they need to register as a swipe. * Should
              accomodate longer swipes and short flicks without having binary
              checks on * just distance thresholds and velocity.
            </Text>
          </Box>
        </motion.div>
      </motion.div>
    </Box>
  )
}

const food: [string, number, number][] = [
  ['🍅', 340, 10],
  ['🍊', 20, 40],
  ['🍋', 60, 90],
]

const ContentScroller: any = () => {
  return food.map(([emoji, hueA, hueB], index) => (
    <Container className="container text-white pb-20">
      <Center>
        <Box display={'flex'} justifyContent="center" mt="20">
          <Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} id={index} />
        </Box>
      </Center>
    </Container>
  ))
}

export default ContentScroller
