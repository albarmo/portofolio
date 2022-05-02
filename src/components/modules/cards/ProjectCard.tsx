import { Box, Image } from '@chakra-ui/react'
import { useRouter } from 'next/router'

interface IPropsProjectCard {
  item: any
}
const ProjectCard: React.FC<IPropsProjectCard> = ({ item }) => {
  const router = useRouter()
  return (
    <Box mr={[0, 5]} onClick={() => router.push('/project/1')} cursor="pointer">
      <Image
        w="420px"
        h="280px"
        objectFit="contain"
        src="../assets/project-1.jpg"
        alt={item}
      />
    </Box>
  )
}
export default ProjectCard
