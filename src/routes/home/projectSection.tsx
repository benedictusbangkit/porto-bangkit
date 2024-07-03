import { Container, Heading, VStack } from "@chakra-ui/react";
import ProjectAPI from "../../service/projectAPI";

const projectSection = () => {
  return (
    <Container mt={"400"} minW={"70%"} maxH={"100%"} position={"relative"}>
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
          Project
        </Heading>
        <ProjectAPI />
      </VStack>
    </Container>
  );
};
export default projectSection;
