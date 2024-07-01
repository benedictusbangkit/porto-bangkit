import {
  Grid,
  Text,
  Image,
  HStack,
  VStack,
  Container,
  Box,
  Heading,
} from "@chakra-ui/react";

const About = () => {
  return (
    <Container mt={"400"} minW={"70%"} maxH={"100%"} position={"relative"}>
      <VStack spacing={"1rem"}>
        <Heading
          alignSelf={"start"}
          size={"xl"}
          borderBottom="3px solid #007ef0"
          color={"white"}
        >
          ABOUT
        </Heading>
        <HStack spacing={100}>
          <VStack>
            <Box border="2px solid #000f84" borderRadius="sm">
              <Image
                src="https://bit.ly/dan-abramov"
                minH="250px"
                minW="220px"
              />
            </Box>
          </VStack>
          <VStack align={"left"} spacing={"2rem"}>
            <Heading color={"white"} size={"lg"}>Here's a litlle about me</Heading>
            <Text color={"white"}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
              aut, iste totam ipsam ipsum illum nesciunt maxime odit. Aliquam
              nam fugiat illo ea harum nesciunt nihil dolor possimus deserunt
              dolore!
            </Text>
            <Text color={"white"}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati, odio perspiciatis! Architecto eligendi perferendis
              aspernatur porro corrupti quia accusamus consequatur numquam
              mollitia fugiat et, sed dicta maxime, molestias deserunt ullam
              placeat voluptatibus iusto quasi repudiandae, modi dolor dolores
              totam ipsam? Voluptates, at.
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </Container>
  );
};

export default About;
