import React from 'react'
import Navbar from '@components/Navbar'
import { Box, Center, Container, Text } from '@chakra-ui/react'
import Lottie from 'react-lottie'
import animationData from '../../public/assets/load.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const Loading: React.FC = () => {
  let [id, setId] = React.useState<number>(0)
  const menus = [
    {
      title:
        'The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela',
    },
    {
      title:
        'The way to get started is to quit talking and begin doing. -Walt Disney',
    },
    {
      title:
        'Life is what happens when you re busy making other plans. -John Lennon',
    },
    {
      title:
        'The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt',
    },
    {
      title:
        'Tell me and I forget. Teach me and I remember. Involve me and I learn. -Benjamin Franklin',
    },
  ]

  React.useEffect(() => {
    const interval = setInterval(function () {
      if (id !== menus?.length) {
        setId((id += 1))
      } else {
        setId(0)
        clearInterval(interval)
      }
    }, 3000)
  }, [])

  console.log(id)

  return (
    <>
      <Navbar />
      <Container
        h="100vh"
        w="100vw"
        className="container-gradient pt-20 flex justify-center items-center text-white"
      >
        <Box>
          <Lottie options={defaultOptions} height={40} width={40} />
          <Center>
            <Text
              mt="5"
              fontSize="xs"
              className="xs:w-4/6 lg:w-5/6 text-center"
            >
              {menus[id]?.title}
            </Text>
          </Center>
        </Box>
      </Container>
    </>
  )
}

export default Loading
