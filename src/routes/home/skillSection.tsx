import { Container, HStack, VStack, Heading } from "@chakra-ui/react";
import SkillCard from "../../component/skillCard";

const skillSection = () => {
  return (
    <Container mt={"400"} minW={"70%"} maxH={"100%"} position={"relative"}>
      <HStack>
        <VStack borderRight="3px solid black">
          <Heading alignSelf={"baseline"} size={"xl"} borderBottom="3px solid #000f84" >
            SKILLS
          </Heading>
        
        <HStack>
          <SkillCard id={0} techLogo={undefined} techName={""} level={""} />
          <SkillCard id={1} techLogo={undefined} techName={""} level={""} />
          <SkillCard id={2} techLogo={undefined} techName={""} level={""} />
          <SkillCard id={3} techLogo={undefined} techName={""} level={""} />
        </HStack>
        </VStack>
      </HStack>
    </Container>
  );
};

export default skillSection;
