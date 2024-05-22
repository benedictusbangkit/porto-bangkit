import {
  Container,
  Text,
  Image,
  HStack,
  VStack,
  SkipNavContent,
  Box,
  Heading,
} from "@chakra-ui/react";

const About = () => {
  return (
    <Container mt={"400"} minW={"70%"} maxH={"100%"} position={"relative"}>
    <SkipNavContent id="about"/>
      <HStack spacing="10rem">
        <VStack spacing={6}>
          <Heading size={"xl"} borderBottom="3px solid #000f84">ABOUT</Heading>
          <Box border="2px solid #000f84" borderRadius="sm">
          <Image src="https://bit.ly/dan-abramov" h="250px" w="400px"/>
          </Box>
        </VStack>
        <VStack align={"left"} spacing={"2rem"}>
          <Heading size={"lg"}>Here's a litlle about me</Heading>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae aut,
            iste totam ipsam ipsum illum nesciunt maxime odit. Aliquam nam
            fugiat illo ea harum nesciunt nihil dolor possimus deserunt dolore!
          </Text>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati,
            odio perspiciatis! Architecto eligendi perferendis aspernatur porro
            corrupti quia accusamus consequatur numquam mollitia fugiat et, sed
            dicta maxime, molestias deserunt ullam placeat voluptatibus iusto
            quasi repudiandae, modi dolor dolores totam ipsam? Voluptates, at.
          </Text>
        </VStack>
      </HStack>
    </Container>
  );
};

export default About;
