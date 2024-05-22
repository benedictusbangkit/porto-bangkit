import {
  HStack,
  Container,
  Button,
  SkipNavLink,
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
          <SkipNavLink href="#about"><Button variant='ghost'>About</Button></SkipNavLink>
            <Button variant='ghost'>Skills</Button>
            <Button variant='ghost'>Projects</Button>
            <Button variant='ghost'>Contact</Button>
          </HStack>
      </Container>
  );
};

export default Navbar;
