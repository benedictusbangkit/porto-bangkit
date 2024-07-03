import {
  Container,
  Heading,
  VStack,
  Card,
  Text,
  Flex,
  Spacer,
  Link,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon, LinkIcon } from "@chakra-ui/icons";

const Contact = () => {
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
            Conctact & Social Media
          </Heading>
          <Flex minW={"100%"}>
            <VStack minW={"49%"}>
              <Card
                bgColor={"#6c6c6c"}
                width={"100%"}
                align={"center"}
                h={"50"}
                justify={"center"}
              >
                <Text color="white">
                  <EmailIcon color={"white"} /> benedictusbangkit@gmail.com
                </Text>
              </Card>
              <Card
                bgColor={"#6c6c6c"}
                width={"100%"}
                h={"50"}
                justify={"center"}
                align={"center"}
              >
                <Text color="white">
                  <PhoneIcon color={"white"} /> 087750363064
                </Text>
              </Card>
            </VStack>
            <Spacer />
            <VStack minW={"49%"}>
              <Card
                bgColor={"#6c6c6c"}
                width={"100%"}
                h={"50"}
                justify={"center"}
                align={"center"}
              >
                <Link
                  href="https://web.facebook.com/bangkitkusumaadi/"
                  color="#007ef0"
                >
                  <LinkIcon color={"white"} /> Facebook
                </Link>
              </Card>
              <Card
                bgColor={"#6c6c6c"}
                width={"100%"}
                h={"50"}
                justify={"center"}
                align={"center"}
              >
                <Link
                  href="https://www.linkedin.com/in/benedictus-bangkit-1b6532216/"
                  color="#007ef0"
                >
                  <LinkIcon color={"white"} /> LinkedIn
                </Link>
              </Card>
              <Card
                bgColor={"#6c6c6c"}
                width={"100%"}
                h={"50"}
                justify={"center"}
                align={"center"}
              >
                <Link
                  href="https://github.com/benedictusbangkit"
                  color="#007ef0"
                >
                  <LinkIcon color={"white"} /> GitHub
                </Link>
              </Card>
            </VStack>
          </Flex>
        </VStack>
      </Container>
    </Container>
  );
};

export default Contact;
