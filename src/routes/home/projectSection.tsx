import { Container, Heading, VStack } from "@chakra-ui/react";
import ProjectCard from "../../component/projectCard";

const projectSection = () => {
  return (
    <Container mt={"400"} minW={"70%"} maxH={"100%"} position={"relative"}>
      <VStack spacing={"1rem"}>
        <Heading
          alignSelf={"start"}
          size={"xl"}
          borderBottom="3px solid #007ef0"
          color={"white"}
        >
          PROJECT
        </Heading>
          <ProjectCard />
      </VStack>
    </Container>
  );
};
export default projectSection;
