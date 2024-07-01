import {
  VStack,
  Text,
  Image,
  Button,
  ChakraProvider,
  HStack,
  Container,
  Heading,
  Box,
} from "@chakra-ui/react";

const Banner = () => {
  return (
    <ChakraProvider>
      <Container
        minW={"70%"}
        maxH={"100%"}
        position={"relative"}
        mt={"200"}
        >
        <HStack>
          <VStack align={"left"}>
            <Box>
              <Heading m={3} size="lg" color="#007ef0">
                Lorem Ipssum
              </Heading>
              <Heading m={3} color="#fb2f38" size="4xl">
                Lorem, ipsum dolor.
              </Heading>
              <Text m={3} fontSize={35} color={"white"}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                quas minus aliquam eaque.
              </Text>
            </Box>
            <HStack mt={"4"} spacing={8} flex={1}>
              <Button size="lg" color={"white"} variant="outline" borderColor="#3995ff">
                Download My CV
              </Button>
              <Button size="lg" color={"white"} variant="outline" borderColor="#3995ff">
                Let's Talk
              </Button>
            </HStack>
          </VStack>
          <Box>
            <Image
              m={3}
              borderRadius="full"
              minH="md"
              minW="md"
              src="https://bit.ly/dan-abramov"
            />
          </Box>
        </HStack>
      </Container>
    </ChakraProvider>
  );
};

export default Banner;
