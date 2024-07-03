import { Container,VStack, Heading } from "@chakra-ui/react";
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
          display={"inline"}
          position={"relative"}
          alignSelf={"start"}
          color={"white"}
          _before={{
            content: '""',
            backgroundColor: "#007ef0",
            width: "50%",
            top: "50%",
            height: "50%",
            opacity: "0.45",
            position: "absolute",
          }}
        >
          Skills
        </Heading>
        <SkillsAPI />
      </VStack>
    </Container>
  );
};

export default skillSection;
