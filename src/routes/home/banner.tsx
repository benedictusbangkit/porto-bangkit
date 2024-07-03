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
import { PhotoListProps } from "../../constant/photoInterFace";
const ImageURL = import.meta.env.VITE_IMAGE_URL;

const Banner: React.FC<PhotoListProps> = ({ photo }) => {
  return (
    <ChakraProvider>
      {photo.map((photo) => (
        <Container
          minW={"100%"}
          maxH={"100%"}
          position={"relative"}
          mt={"200"}
          bgColor={"#1f1f1f"}
        >
          <Container minW={"70%"}>
            <HStack>
              <VStack align={"left"}>
                <Box>
                  <Heading m={3} size="lg" color="#007ef0">
                    Hi, my name is
                  </Heading>
                  <Heading m={3} color="#fb2f38" size="4xl">
                    Benedictus Bangkit Kusuma Adi
                  </Heading>
                  <Text m={3} fontSize={35} color={"white"}>
                    I'm a Web Developer, I'm also love everything about
                    technology and electronics
                  </Text>
                </Box>
                <HStack mt={"4"} spacing={8} flex={1}>
                  <a
                    href={photo.attributes.file}
                    download={"Benedictus Bangkit Kusuma Adi-resume.pdf"}
                    target="_blank"
                  >
                    <Button
                      size="lg"
                      color={"white"}
                      variant="outline"
                      borderColor="#3995ff"
                    >
                      Download My CV
                    </Button>
                  </a>
                  <Button
                    size="lg"
                    color={"white"}
                    variant="outline"
                    borderColor="#3995ff"
                  >
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
                  src={ImageURL + photo.attributes.banner}
                />
              </Box>
            </HStack>
          </Container>
        </Container>
      ))}
    </ChakraProvider>
  );
};

export default Banner;
