import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  Heading,
  Grid,
  VStack,
  Divider,
  Link
} from "@chakra-ui/react";
import {LinkIcon, ViewIcon} from "@chakra-ui/icons";
import { FaGithub } from 'react-icons/fa';
import { ProjectListProps } from "../constant/projectInterFace";
const ImageURL = import.meta.env.VITE_IMAGE_URL;

const ProjectCard: React.FC<ProjectListProps> = ({ project }) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={10}>
      {project.map((project) => (
        <Card bgColor={"#303030"} minW={"100%"} key={project.id}>
          <Image
            src={ImageURL + project.attributes.image}
            minH={"60%"}
            minW={"100%"}
          ></Image>
          <CardBody>
            <Divider />
            <VStack align={"left"}>
              <Heading color={"white"}>
                {project.attributes.project_name}
              </Heading>
              <Text color={"white"}>{project.attributes.project_desc}</Text>
            </VStack>
          </CardBody>
          <CardFooter justifyContent={"center"} h={"100%"}>
            <Link href={project.attributes.link} p={"4"}>
            <LinkIcon color={"white"} boxSize={"6"} />
            </Link>
            <Link href={project.attributes.link} p={"4"}>
            <ViewIcon color={"white"} boxSize={"6"} />
            </Link>
            <Link href={project.attributes.github} p={"4"}>
            <FaGithub color="white" size={"30"} />
            </Link>
          </CardFooter>
        </Card>
      ))}
    </Grid>
  );
};

export default ProjectCard;
