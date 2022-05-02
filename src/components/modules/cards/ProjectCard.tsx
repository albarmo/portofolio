import { Box, Image } from '@chakra-ui/react'

interface IPropsProjectCard {
  item: any
}
const ProjectCard: React.FC<IPropsProjectCard> = ({ item }) => {
  return (
    <Box mr={[0, 5]}>
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
