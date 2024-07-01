import {
  HStack,
  Container,
  Button
} from "@chakra-ui/react";

const Navbar = () => {
  return (
      <Container
        as={"nav"}
        maxW={"lg"}
        position={"relative"}
        border="2px solid #3995ff"
        p={2}
        mt={4}
        borderRadius='lg'
        >
        <HStack spacing="3rem" justify={"center"}>
            <Button color={"white"} variant='ghost'>Skills</Button>
            <Button color={"white"} variant='ghost'>Projects</Button>
            <Button color={"white"} variant='ghost'>Contact</Button>
          </HStack>
      </Container>
  );
};

export default Navbar;
