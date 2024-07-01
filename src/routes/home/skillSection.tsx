import { Container, Grid, VStack, Heading } from "@chakra-ui/react";
import SkillsAPI from "../../service/skillsAPI";

const skillSection = () => {
  return (
    <Container
      mt={"400"}
      minW={"70%"}
      maxH={"100%"}
      position={"relative"}
    >
      <VStack spacing={"1rem"}>
        <Heading
          alignSelf={"start"}
          size={"xl"}
          borderBottom="3px solid #007ef0"
          color={"white"}
        >
          SKILLS
        </Heading>
        <SkillsAPI />
      </VStack>
    </Container>
  );
};

export default skillSection;
