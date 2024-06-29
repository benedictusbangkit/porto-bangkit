import { Container, HStack, VStack, Heading, Flex } from "@chakra-ui/react";
import SkillsAPI from "../../service/skillsAPI";

const skillSection = () => {
  return (
    <Container
      mt={"400"}
      minW={"70%"}
      maxH={"100%"}
      position={"relative"}
      border="solid, black, 1px"
    >
      <HStack justify={"center"}>
        <VStack>
          <Heading
            alignSelf={"baseline"}
            size={"xl"}
            borderBottom="3px solid #000f84"
          >
            SKILLS
          </Heading>
          <SkillsAPI />
        </VStack>
      </HStack>
    </Container>
  );
};

export default skillSection;
