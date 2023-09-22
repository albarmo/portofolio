// @ts-nocheck
import React from 'react'
import { Box, Container, Flex, Text, HStack } from '@chakra-ui/react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ExtraCard from '../cards/ExtraCard'

const Extras: React.FC = () => {
  const responsiveExtras = {
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

  const extras = [
    { id: 1, type: 'Music', title: 'Midnigt On Earth', link: 'https://www.bandlab.com/albarms/albums/2320bd6f-3255-ee11-9937-002248449027', imgSrc: '/assets/extras/midnight-on-earth.png' },
    { id: 1, type: 'Music', title: 'The Moer', link: 'https://open.spotify.com/artist/1BrFUS5TV1ipVjXhi0UniR?si=zfIUPz-TQMyoypQggLE0mw', imgSrc: '/assets/extras/themoer.jpg' },
    { id: 1, type: 'Music', title: 'Bandcamp', link: 'https://themoer.bandcamp.com/album/midnight-opera', imgSrc: 'https://cdn.myportfolio.com/d7ee1b49-3469-4704-82c9-43b74006450a/6ce1f970-20dd-4f83-a34c-04bf79d4e276_car_4x3.png?h=207d523dd032cb377999bcf495c67e41' }
  ]

  return (
    <Container className="xs:pt-0 xs:pb-20 container xl:p-20 xl:pt-0 items-center text-white">
      <Flex
        w={['100%', '100%', 'container.sm', 'container.md', 'container.lg']}
        justifyContent="space-between"
        className="xs:flex-col-reverse sm:flex-row"
        align="center"
        p={[2, 0]}
      >
        <Box w="full">
          <Text className="text-4xl font-extrabold">#Extras</Text>
          <Text className="text-gray-500 mt-3">
            I'm just want to share everything for u..
          </Text>
        </Box>
      </Flex>
      <Box
        mt="10"
        pl={[3, 0]}
        w={['100%', '100%', 'container.sm', 'container.sm', 'container.lg']}
      >
        <Carousel responsive={responsiveExtras}>
          {extras.map((item: any, index: number) => (
            <ExtraCard key={index} item={item} />
          ))}
        </Carousel>
      </Box>
    </Container>
  )
}

export default Extras
