import { Container, HStack, Heading, VStack } from "@chakra-ui/react";
import ProjectCard from "../../component/projectCard";

const projectSection = () => {
  return (
    <Container border='1px' borderColor='black' mt={"400"} minW={"70%"} maxH={"100%"} position={"relative"}>
      <VStack spacing={2}>
        <Heading
          alignSelf={"baseline"}
          size={"xl"}
          borderBottom="3px solid #000f84"
        >
          PROJECT
        </Heading>
        <HStack>
          <ProjectCard />
          <ProjectCard />
        </HStack>
      </VStack>
    </Container>
  );
};
export default projectSection;
