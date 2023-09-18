import { Box, Tag, Link ,Image } from '@chakra-ui/react'

interface IPropsBlogCard {
  item: any
}
const ExtraCard: React.FC<IPropsBlogCard> = ({ item }) => {
  return (
    <Box w={['90%']} mb="5">
      <Tag variant="solid" colorScheme="teal" size="sm" mb="4">
        {item?.type}
      </Tag>
       <Image
        boxSize="250px"
        objectFit="cover"
        src={item.imgSrc}
        alt={item}
      />
      <Link
        href={item?.link}
        target='_blank' 
      >
         {item?.title}
      </Link>
    </Box>
  )
}

export default ExtraCard
