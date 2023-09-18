import { Box, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

interface IPropsProjectCard {
  project: any
  hasTitle: boolean
}
const ProjectCard: React.FC<IPropsProjectCard> = ({ project, hasTitle }) => {
  const router = useRouter()
  return (
    <Box
      h="280px"
      mr={[0, 5]}
      onClick={() => router.push(`/project/${project.id}`)}
      cursor="pointer"
    >
      <Image
        w="420px"
        h="auto"
        objectFit="contain"
        src={project?.imgSrc}
        alt={project.title}
      />
      {hasTitle && (
        <Text
          mt="3"
          fontWeight="semibold"
          textColor="black"
          className="hover: text-white"
        >
          {project.title}
        </Text>
        
      )}
    </Box>
  )
}
export default ProjectCard
