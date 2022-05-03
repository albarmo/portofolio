import { Box, Tag, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

interface IPropsBlogCard {
  item: any
}
const BlogCard: React.FC<IPropsBlogCard> = ({ item }) => {
  const router = useRouter()
  return (
    <Box w={['90%']} mb="5">
      <Tag variant="solid" colorScheme="teal" size="sm" mb="4">
        React
      </Tag>
      <Text
        className="text-sm font-semibold text-justify cursor-pointer"
        onClick={() => router.push('/blog/1')}
      >
        Five Ways Tech Startups Are Different from Other Small and Medium-Sized
        Enterprises
      </Text>
    </Box>
  )
}

export default BlogCard
