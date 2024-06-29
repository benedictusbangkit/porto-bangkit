import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  Heading,
  Container,
  Button,
  VStack,
  Divider,
  Flex,
  Spacer,
} from "@chakra-ui/react";

const ProjectCard = () => {
  return (
    <Container>
      <Flex>
        <Card backgroundColor={"gray"} boxSize={"500px"}>
          <Image
            src="https://support.content.office.net/en-us/media/ec62299b-07e7-4491-b777-77f1cbe477ec.png"
            minH={"60%"}
            minW={"100%"}
          ></Image>
          <CardBody>
            <Divider />
            <VStack align={"left"}>
              <Heading>Name Project</Heading>
              <Text>Description Project</Text>
            </VStack>
          </CardBody>
          <CardFooter h={"100%"}>
            <Button
              width="100%"
              colorScheme="whiteAlpha"
              minH={"30px"}
              textColor={"black"}
            >
              Demo
            </Button>
          </CardFooter>
        </Card>
        <Spacer />
      </Flex>
    </Container>
  );
};

export default ProjectCard;
