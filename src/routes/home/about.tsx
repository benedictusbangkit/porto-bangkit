import {
  Text,
  Image,
  HStack,
  VStack,
  Container,
  Box,
  Heading,
  ChakraProvider,
} from "@chakra-ui/react";
import { PhotoListProps } from "../../constant/photoInterFace";
const ImageURL = import.meta.env.VITE_IMAGE_URL;

const About: React.FC<PhotoListProps> = ({ photo }) => {
  return (
    <ChakraProvider>
      {photo.map((photo) => (
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
                  <Box border="2px solid #007ef0" borderRadius="sm">
                    <Image
                      src={ImageURL + photo.attributes.about}
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
                    I specialize in building front-end UI web that connect with
                    API and other backend technologies. I am passionate about
                    learning new technologies and understand there is more than
                    one way to accomplish a task.
                  </Text>
                  <Text color={"white"}>
                    I believe that being a great developer doesn't mean using
                    one particular language, but choosing the right tools to
                    solve a problem. I love researching new things and
                    implementing them into interesting projects
                  </Text>
                </VStack>
              </HStack>
            </VStack>
          </Container>
        </Container>
      ))}
    </ChakraProvider>
  );
};

export default About;
