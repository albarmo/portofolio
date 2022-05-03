import { Box, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

interface IPropsProjectCard {
  item: any
  hasTitle: boolean
}
const ProjectCard: React.FC<IPropsProjectCard> = ({ item, hasTitle }) => {
  const router = useRouter()
  return (
    <Box
      h="280px"
      mr={[0, 5]}
      onClick={() => router.push('/project/1')}
      cursor="pointer"
    >
      <Image
        w="420px"
        h="auto"
        objectFit="contain"
        src="../assets/project-1.jpg"
        alt={item}
      />
      {hasTitle && (
        <Text
          mt="3"
          fontWeight="semibold"
          textColor="black"
          className="hover: text-white"
        >
          Project {item}
        </Text>
      )}
    </Box>
  )
}
export default ProjectCard
