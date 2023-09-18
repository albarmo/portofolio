import { Box, Tag, Text,Link } from '@chakra-ui/react'

interface IPropsBlogCard {
  item: any
}
const BlogCard: React.FC<IPropsBlogCard> = ({ item }) => {
  return (
    <Box w={['90%']} mb="5">
      <Link href={item?.link} target='_blank'>
      <Text
        className="text-sm font-semibold text-justify cursor-pointer"
        >
       {item?.title}
        </Text>
        </Link>
         <Text
        className="text-sm font-light mt-2 text-justify cursor-pointer"
        >
       {item?.writer}
      </Text>
    </Box>
  )
}

export default BlogCard
