import {
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
    <Container
      mt={"400"}
      minW={"100%"}
      bgColor={"#1f1f1f"}
      maxH={"100%"}
      position={"relative"}
      p={"10"}
    >
      <Container minW={"70%"}>
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
            About
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
              <Heading color={"white"} size={"lg"}>
                Here's a litlle about me
              </Heading>
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
    </Container>
  );
};

export default About;
