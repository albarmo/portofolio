import { Box, Tag, Text } from '@chakra-ui/react'

interface IPropsBlogCard {
  item: any
}
const BlogCard: React.FC<IPropsBlogCard> = ({ item }) => {
  return (
    <Box w="220px">
      <Tag variant="solid" colorScheme="teal" size="sm" mb="4">
        Teal
      </Tag>
      <Text className="text-md font-semibold text-justify">
        Five Ways Tech Startups Are Different from Other Small and Medium-Sized
        Enterprises
      </Text>{' '}
    </Box>
  )
}

export default BlogCard
