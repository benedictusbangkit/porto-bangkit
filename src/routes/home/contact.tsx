import { Container, Heading, VStack } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container mt={"400"} minW={"70%"} maxH={"100%"} position={"relative"}>
      <VStack>
      <Heading alignSelf={"start"} size={"xl"} borderBottom="3px solid #000f84">
        Conctact & Social Media
      </Heading>
      </VStack>
    </Container>
  );
};

export default Contact;
