import { Box, Image } from '@chakra-ui/react'

interface IPropsTechLogo {
  item: string
}
const TechLogo: React.FC<IPropsTechLogo> = ({ item }) => {
  return (
    <Box>
      <Image
        boxSize="80px"
        objectFit="cover"
        src="https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png"
        alt={item}
      />
    </Box>
  )
}

export default TechLogo
